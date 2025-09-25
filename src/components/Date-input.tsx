interface IDateInput extends React.ComponentProps<"input"> {
    label: string;
}

export default function DateInput({ label, ...props }: IDateInput) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input id={label} type="date" {...props} />
        </div>
    );
}
