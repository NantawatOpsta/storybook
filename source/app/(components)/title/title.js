import Button from "../button/button"

export default function Title({title}) {
    return (
        <div className="flex justify-between border-b border-gray-200 py-5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Button title="Download" status="black" />
        </div>
    )
}