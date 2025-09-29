export default function Maps({ lat, lng }) {
    return (
        <div className="w-full container mx-auto h-[600px] rounded-2xl flex flex-col gap-2 items-center">
            <span className="py-6 flex gap-2 items-end">
                <h1>Contact US</h1>
                <h2>for Custom Packaging and Printing</h2>
            </span>
            <iframe
                src={`https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`}
                width="100%"
                height="100%"
                // style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full transition-all duration-300 hover:scale-[1.009]"
            ></iframe>
        </div>
    );
}
