const SliderArrow = (props : any) => {
    const disabled = props.disabled ? "" : "hover:opacity-80 cursor-pointer"
    if (!props.disabled) return (
        <div
        onClick={props.onClick}
        className={`h-4 ${props.left ? "rotate-180" : "ml-auto"} ${disabled}`}
        >
        <div
            className="ml-3 md:ml-5 h-full w-8 md:w-32 bg-right bg-no-repeat"
            style={{ backgroundImage: 'url(/images/arrow.svg)' }}>
        </div>
        </div>
    )
}

export default SliderArrow
