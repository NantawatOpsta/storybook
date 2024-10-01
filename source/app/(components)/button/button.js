export default function Button({title, status}) {
    if (status === "success") {
        return (
            <button className="bg-green-700 text-white rounded-md px-6 py-2">{title}</button>
        )
    }

    if (status === "warning") {
        return (
            <button className="bg-yellow-600 text-white rounded-md px-6 py-2">{title}</button>
        )
    }

    if (status === "danger") {
        return (
            <button className="bg-red-600 text-white rounded-md px-6 py-2">{title}</button>
        )
    }

    if (status === "black") {
        return (
            <button className="bg-black text-white rounded-md px-6 py-2">{title}</button>
        )
    }
}