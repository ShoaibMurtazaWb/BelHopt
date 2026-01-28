import { toast  } from "sonner";

import React from "react";


const toastColors = {
    success: { solidBg: "#10b981", lightBg: "#f0fdf4", border: "#10b981" },
    error: { solidBg: "#ef4444", lightBg: "#fef2f2", border: "#ef4444" },
    warning: { solidBg: "#f59e0b", lightBg: "#fefce8", border: "#f59e0b" },
    info: { solidBg: "#3b82f6", lightBg: "#f5faff", border: "#3b82f6" },
};

type ToastType = "success" | "error" | "warning" | "info";
type ToastVariant = "solid" | "light";

function getToastStyle(type: ToastType, variant: ToastVariant): React.CSSProperties {
    const colors = toastColors[type];

    return {
        backgroundColor: variant === "solid" ? colors.solidBg : colors.lightBg,
        color: variant === "solid" ? "white" : "black",
        borderLeft: `4px solid ${colors.border}`,
    };
}

export interface ShowToastProps {
    type?: ToastType;
    variant?: ToastVariant;
    message: React.ReactNode;
    duration?: number;
    onClose?: () => void;
    style?: React.CSSProperties;
  
}

export function showToast({
    type = "info",
    variant = "solid",
    message,
    duration = 3000,
    onClose,
    style,
}: ShowToastProps) {
    toast(message, {
        duration,
        style: {
            ...getToastStyle(type, variant),
            padding: "12px 16px",
            borderRadius: "8px",
            fontFamily: "Poppins, sans-serif",
            boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            ...style,
        },
        action: onClose
            ? {
                label: "✕",
                onClick: onClose,
            }
            : undefined,
        actionButtonStyle: {
            background: "transparent",
            border: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "16px",
            opacity: 0.7,
        },
    });
}


// import { toast } from "sonner";
// import React from "react";

// const toastColors = {
//     success: {
//         solidBg: "#10b981",
//         lightBg: "#f0fdf4",
//         border: "#10b981",
//     },
//     error: {
//         solidBg: "#ef4444",
//         lightBg: "#fef2f2",
//         border: "#ef4444",
//     },
//     warning: {
//         solidBg: "#f59e0b",
//         lightBg: "#fefce8",
//         border: "#f59e0b",
//     },
//     info: {
//         solidBg: "#3b82f6",
//         lightBg: "#f5faff",
//         border: "#3b82f6",
//     },
// };


// type ToastType = "success" | "error" | "warning" | "info";
// type ToastVariant = "solid" | "light";


// function getToastStyle(
//     type: ToastType,
//     variant: ToastVariant
// ): React.CSSProperties {
//     const colors = toastColors[type];

//     return {
//         backgroundColor:
//             variant === "solid" ? colors.solidBg : colors.lightBg,
//         color: variant === "solid" ? "white" : "black",
//         borderLeft: `4px solid ${colors.border}`,
//     };
// }


// export interface ShowToastProps {
//     type?: ToastType;
//     variant?: ToastVariant;
//     message: React.ReactNode;
//     duration?: number;
//     onClose?: () => void;
// }
// export function showToast({
//     type = "info",
//     variant = "solid",
//     message,
//     duration = 3000,
//     onClose,
// }: ShowToastProps) {
//     toast(
//         <span className="text-black">{message}</span>,
//         {
//             duration,
//             style: {
//                 ...getToastStyle(type, variant),
//                 padding: "12px 16px",
//                 borderRadius: "8px",
//                 fontFamily: "Poppins, sans-serif",
//                 boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//             },
//             action: onClose
//                 ? {
//                     label: "✕",
//                     onClick: onClose,
//                 }
//                 : undefined,
//             actionButtonStyle: {
//                 background: "transparent",
//                 border: "none",
//                 color: "black",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 opacity: 0.7,
//             },
//         }
//     );
// }


