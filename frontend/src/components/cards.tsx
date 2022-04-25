import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Functional component to display data received from API
// useState is a Hook. We call it inside a function component to add some local state to it.
function Card() {
    const [viewMore, setViewMore] = useState(false);
    const charactersData: string[] = useSelector((state: any) => state.characters.data);
    console.info('Data', charactersData);
    // Mapping each object in the data and creating card for each result.
    const characterCard: JSX.Element[] = charactersData.map((result: any) => {
        // console.info('Res', result);
        return(
            <div key={result.id} style={{ display: 'flex', flexDirection: 'column', width: 180, paddingRight: 10, paddingBottom: 50}}>
                <img alt='superHero' src={result.thumbnail.path + '.' + result.thumbnail.extension} style={{ height: 210, width: 180, borderBottom:'6px solid #eb2d5c'}}/>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#000', height: 145, borderBottomRightRadius: 25, textAlign: 'justify'}}>
                    <span style={{ color: '#eee', fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 20 }}>
                        { result.name.toUpperCase() }
                    </span>

                    <div style={{ marginTop: 80, position: 'absolute'}}>
                        {(result.urls.map((response: any) => {
                            return (
                                <div key={response.type} style={{ marginLeft: 20 }}>
                                    <span onClick={() => window.open(response.url)} style={{ color: '#eee', fontSize: 10 , fontFamily: 'helvetica', cursor: 'pointer'}}>
                                        {response.type.toUpperCase()}
                                    </span>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        )
    }).filter((e: any, k: number) => (viewMore) ? k <= charactersData.length : k <= 6)

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 12 }}>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', fontSize: 22, fontWeight: '700'}}>
                FEATURED CHARACTERS
            </span>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {characterCard}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 30, width: 100, backgroundColor: '#000', borderRadius: 20, cursor: 'pointer'}}>
                    <span style={{ color: '#eee'}} onClick={() => setViewMore(!viewMore)}>
                        {(viewMore) ? 'View Less' : 'View More' }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;