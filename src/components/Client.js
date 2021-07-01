import React, { useEffect } from 'react'
import Client1 from './partials/Client1'
import '../styles/Client.css'
import { getClients } from '../redux/client/clientActions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './partials/Loading'

const Client = () => {
    const dispatch = useDispatch()
    const getClient = useSelector(state => state.getClient)

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])

    return (
        <div className="client">
            <div className="titleWrapper">
                <h1 className="title1">Our clients</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="clientInner">
                <h3>Take a look at our clients</h3>
                <h3>We did a great job with these companies. You can be next to work with</h3>

                <div className="clientWrapper">
                    {getClient.getClientLoading ? (
                        <Loading />
                    ) : getClient.getClientError !== '' ? (
                        <p>{getClient.getClientError}</p>
                    ) : getClient.getClientResponse.length && (
                        <>
                            {getClient.getClientResponse.map(client => (
                                <Client1
                                    key={client._id}
                                    image={client.photo.base64}
                                    name={client.clientName}
                                    desc={client.brags}
                                />
                            ))}
                        </>
                    )}
                    {/* <Client1
                        image={polimeraas}
                        name="Polimeraas"
                        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. "
                    />

                    <Client1
                        image={ratnadeep}
                        name="Ratnadeep"
                        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. "
                    />

                    <Client1
                        image={mitaza}
                        name="Mitaza"
                        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. "
                    />

                    <Client1
                        image={freshby}
                        name="Freshby"
                        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. "
                    />

                    <Client1
                        image={pallaviSchool}
                        name="Pallavi School"
                        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. "
                    /> */}


                </div>
            </div>
        </div>
    )
}

export default Client
