"use client";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ContactFormContent from "./ContactFormContent";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function FormDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-white bg-opacity-20" />
      <DialogContent className="max-w-[80vw] p-4 max-h-[90vh] overflow-y-auto sm:rounded-2xl [&>button:last-child]:h-10 [&>button:last-child]:w-10 [&>button:last-child]:p-2 [&>button:last-child>svg]:h-6 [&>button:last-child>svg]:w-6">
        <DialogTitle className="hidden" />
        <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden bg-gray-100">
          {/* Left: Image */}
          <div className="relative max-md:h-[200px] md:h-full w-full md:w-[35%]">
            <img
              src="https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-11.webp"
              alt="Side image"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right: Form */}
          <div className="pt-6 px-6 w-full md:w-[65%]">
            <ContactFormContent onOpenChange={onOpenChange} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
