const HeaderAndFooter = (props)=>{

    return (
        <>
            <div className={'bg-[#203040] p-2 text-white'}>
                {props.children}
            </div>
        </>
    )
}
export default HeaderAndFooter;