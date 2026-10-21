import { Check } from "@/components/shared/icon";
export function Toast({ message }: {
    message: string;
}) {
    if (!message)
        return null;
    return <div className="toast" role="status"><Check size={17}/>{message}</div>;
}
