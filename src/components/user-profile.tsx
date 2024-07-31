import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "../interfaces/user";

export function UserProfile() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [user, setUser] = useState<User>()

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const user = data.users.filter((user: User) => user.id.toString() === userId)
            setUser(user[0])
        })
    })

    function backToUserList() {
        navigate('/')
    }

    return (
       <div className="flex bg-zinc-800">
            {user && (
                <div className="w-full flex">
                    <div className="flex justify-center m-auto w-1/4">
                        <button className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            <span onClick={backToUserList}> Back </span>
                        </button>
                    </div>

                    <div className="w-3/4 ml-24">
                        <form className="w-full max-w-screen-md p-6">
                            <div className="flex items-center gap-8 mb-12">
                                <img src={user.image} alt="profile picture" width={185} height={185}  />
                                <span className="text-zinc-50 text-7xl">PROFILE</span>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.firstName} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.lastName} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                            </div>

                            <div className='w-full h-0.5 bg-white mb-6' />

                            <div className="flex -mx-3 mb-6">
                                <div className="flex-auto px-3">
                                    <label className="block uppercase tracking-wide justify-start text-zinc-50 text-xs font-bold mb-2">
                                        Age
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.age} 
                                        className="w-16 appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" />
                                </div>
                                <div className="flex-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.email} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="flex-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Phone
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.phone} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                            </div>

                            <div className='w-full h-0.5 bg-white mb-6' />

                            <div className="flex -mx-3 mb-6">
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide justify-start text-zinc-50 text-xs font-bold mb-2">
                                        birthdate
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.birthDate} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Gender
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.gender} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Height
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={`${user.height} cm`}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Weight
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={`${user.weight} kg`}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        BloodGroup
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.bloodGroup}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                            </div>

                            <div className='w-full h-0.5 bg-white mb-6' />

                            <div className="flex -mx-3 mb-6">
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide justify-start text-zinc-50 text-xs font-bold mb-2">
                                        Country
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.address.country} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        State
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.address.state} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        City
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.address.city}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                                <div className="w-auto md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Address
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.address.address}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                            </div>

                            <div className='w-full h-0.5 bg-white mb-6' />

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Username
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={user.username} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-zinc-50 text-xs font-bold mb-2">
                                        Password
                                    </label>
                                    <input
                                        disabled
                                        type="password"
                                        value={user.password} 
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
       </div>
    )
}