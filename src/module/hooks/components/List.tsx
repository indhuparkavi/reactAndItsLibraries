
const List = ({ list, isPending }: any) => {
    console.log(isPending);

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {!isPending ?
                    <>
                        {list?.map((item: any) => {
                            return (
                                <>
                                    <div style={{ width: '30px', height: '30px', flexGrow: 'inherit', backgroundColor: isPending ? 'gray' : 'yellowgreen', margin: '10px' }}>
                                        {item}
                                    </div>

                                </>
                            )
                        })}
                    </>
                    :
                    <div>
                        loading...
                    </div>
                }
            </div>
        </div>
    )
}
export default List;