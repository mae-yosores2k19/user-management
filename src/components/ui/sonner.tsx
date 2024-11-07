// "use client";

// import { CheckIcon, InfoIcon, CircleX, TriangleAlert } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Toaster as Sonner } from "sonner";

// type ToasterProps = React.ComponentProps<typeof Sonner>;

// const Toaster = ({ ...props }: ToasterProps) => {
//   const { theme = "system" } = useTheme();

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group"
//       icons={{
//         success: (
//           <CheckIcon className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#326D0F]" />
//         ),
//         error: (
//           <CircleX className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#FF2F2F]" />
//         ),
//         info: (
//           <InfoIcon className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#67B2F4]" />
//         ),
//         warning: (
//           <TriangleAlert className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#FA9135]" />
//         ),
//       }}
//       toastOptions={{
//         classNames: {
//           toast:
//             "group toast group-[.toaster]:justify-between  group-[.toaster]:p-2.5 group-[.toaster]:border-none group-[.toaster]:text-white data-[type=success]:bg-[#E5FCD7] data-[type=error]:bg-[#FFE0E0]  data-[type=info]:bg-[#A7BAF6] data-[type=warning]:bg-[#FFC695] group-[.toaster]:flex-row-reverse",
//           description:
//             "group-[.toast]:text-muted-foreground group-data-[type=success]:text-[#326D0F] group-data-[type=error]:text-[#FF2F2F] group-data-[type=info]:text-[#1B609D] group-data-[type=warning]:text-[#9B600E]",
//           title:
//             "group-data-[type=success]:text-[#326D0F] group-data-[type=error]:text-[#FF2F2F] group-data-[type=info]:text-[#1B609D] group-data-[type=warning]:text-[#9B600E]",
//           actionButton: "group-[.toast]:bg-primary group-[.toast]:text-red",
//           cancelButton:
//             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:text-black",
//           closeButton:
//             "group-data-[type=error]:bg-red-400 group-data-[type=success]:bg-lime-400 hover:bg-red-400",
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export { Toaster };
"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
// import { CheckIcon, InfoIcon, CircleX, TriangleAlert } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      expand={false}
      // icons={{
      //   success: (
      //     <CircleX className="h-6 w-6 rounded-lg border-2 border-white bg-white/60 p-1.5 text-[#326D0F]" />
      //   ),
      //   error: (
      //     <CheckIcon className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#FF2F2F]" />
      //   ),
      //   info: (
      //     <InfoIcon className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#67B2F4]" />
      //   ),
      //   warning: (
      //     <TriangleAlert className="h-6 w-6 rounded-lg border-2 border-white bg-white bg-opacity-60 p-1.5 text-[#FA9135]" />
      //   ),
      // }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:justify-between  group-[.toaster]:p-2.5 group-[.toaster]:border-none group-[.toaster]:text-white data-[type=success]:bg-[#E5FCD7] data-[type=error]:bg-[#FFE0E0]  data-[type=info]:bg-[#A7BAF6] data-[type=warning]:bg-[#FFC695] group-[.toaster]:flex-row-reverse",
          description:
            "group-[.toast]:text-muted-foreground group-data-[type=success]:text-[#326D0F] group-data-[type=error]:text-[#FF2F2F] group-data-[type=info]:text-[#1B609D] group-data-[type=warning]:text-[#9B600E]",
          title:
            "group-data-[type=success]:text-[#326D0F] group-data-[type=error]:text-[#FF2F2F] group-data-[type=info]:text-[#1B609D] group-data-[type=warning]:text-[#9B600E]",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-red",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:text-black",
          closeButton:
            "group-data-[type=error]:bg-red-400 group-data-[type=success]:bg-lime-400 hover:bg-red-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
