export default async function submitForm(details) {
    try {
        console.log(convertFormData(details));
        const response = await fetch("/api/submitForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(convertFormData(details)),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Server Error:", data);
            throw new Error(data.error || "Something went wrong");
        }

        const refinedData = extractRequriedDataFromResponse(data);
        console.log("Form submitted:", refinedData);

        if (refinedData.is_spam) {
            localStorage.setItem('spamIP', await getUsersIP());
        }

        return refinedData;
    } catch (error) {
        console.error("Submit failed:", error.message);
        throw error;
    }
}

export function extractRequriedDataFromResponse(data) {
    return {
        is_spam: data.response.is_spam,
        is_valid: data.response.is_valid,
        message: data.response.form.confirmation.message
    }
}

export function convertFormData(formData) {
    // Prefer fullName, fallback to name
    const rawName = formData.fullName || formData.name || "";
    const parts = rawName.trim().split(/\s+/);

    // First word = firstName, last word = lastName, middle ignored
    const firstName = parts.length > 0 ? parts[0] : "";
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

    return {
        input_values: {
            "input_24_3": firstName,                                // First Name
            "input_24_6": lastName,                                 // Last Name
            "input_2": formData.email || "",                        // Email
            "input_3": formData.specifications || "",               // Message / Packaging Details
            "input_5": formData.phone || "",                        // Phone
            "input_6": formData.companyName || "",                  // Company Name
            "input_9": formData.address || "",                      // Address
            "input_10": formData.quantity || "",                    // Quantity
            "input_11": formData.website || "",                     // Website
            "input_14": formData.industry || "",                    // Industry
            "input_15": formData.material || "",                    // Material
            "input_16": formData.length ? `${formData.length}${formData.dimensionUnit || ""}` : "", // Length
            "input_17": formData.width ? `${formData.width}${formData.dimensionUnit || ""}` : "",   // Width
            "input_18": formData.height ? `${formData.height}${formData.dimensionUnit || ""}` : "", // Height
            "input_20": formData.coatingLamination || "",           // Coating
            "input_21": formData.extraFinishing || "",              // Extra Finishing
        },
    };
}

export async function getUsersIP() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return null;
    }
}