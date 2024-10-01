export default function Navigation({navigationList}) {
    return (
        <div className="flex gap-8 border-b border-gray-200 py-5">
            {navigationList &&
                navigationList.map((item) => (
                    <div key={item.id} className="">
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}