import type React from "react";

interface IDateInput extends React.ComponentProps<"input"> {
    label: string;
}

const generalStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "var(--color-2)",
    padding: "var(--gap-s) .75rem",
    backgroundColor: "var(--color-4)",
    borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: "600",
    marginBottom: "var(--gap-s)",
    ...generalStyle,
};

const inputStyle: React.CSSProperties = {
    border: "none",
    fontFamily: "monospace",
    ...generalStyle,
};

export default function DateInput({ label, ...props }: IDateInput) {
    return (
        <div>
            <label style={labelStyle} htmlFor={label}>
                {label}
            </label>
            <input style={inputStyle} id={label} type="date" {...props} />
        </div>
    );
}
