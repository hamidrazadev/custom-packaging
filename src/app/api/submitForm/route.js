import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parse body from incoming request
        const body = await request.json();

        // Forward request to external API
        const response = await fetch("https://apiv1.boxprintinghub.com/gravityformsapi/forms/1/submissions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Y2tfMGIwMWQ2MzliMzkyMjJhOTM4ZjJhMWY5NWM3NzYxYTFjYjMzNmE2MTpjc18zMWI4NmQ0YTc4ZTY5MjgyZDBlZTk2ZGNmNzQyMzZmODVlM2YyYTEy"
            },
            body: JSON.stringify(body),
        });

        // Handle API errors gracefully
        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { error: "External API error", details: errorText },
                { status: response.status }
            );
        }

        // Convert to JSON and return
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        // Catch unexpected errors
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}
