import React, { useState } from 'react'
import axios from 'axios'
import { useRef } from 'react'

function ApplicationForm() {
    let token = localStorage.getItem('auth-token')

    const [error, setError] = useState(false)
    const first = useRef(null)
    const product = useRef(null)
    const model = useRef(null)
    const customer = useRef(null)
    const unique = useRef(null)
    const market = useRef(null)
    const solve = useRef(null)
    const cpny = useRef(null)
    const back = useRef(null)
    const email = useRef(null)
    const state = useRef(null)
    const services = useRef(null)
    const second = useRef(null)
    const city = useRef(null)
    const phone = useRef(null)
    const advantage = useRef(null)
    const business = useRef(null)
    const logo= useRef(null)

    const [form, setForm] = useState({
        Name: "",
        Address: "",
        City: "",
        State: "",
        Email: "",
        PhoneNumber: "",
        CompanyName: "",
        Logo: "",
        Background: "",
        Product: "",
        Problem: "",
        Solution: "",
        Proposition: "",
        Advantage: "",
        Revenue: "",
        MarketSize: "",
        Services: "",
        Proposal: "",
    })
    // const [file,setFile]=useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const fileUpload = (e) => {
        const img = e.target.files[0]
        setForm({
            ...form,
            Logo: img
        })
    }
    const submit = (e) => {
        e.preventDefault()

        const Data = new FormData()
        const { Name, Address, City, State, Email, PhoneNumber, CompanyName, Logo, Background, Product, Problem, Solution, Proposition,
            Advantage, Revenue, MarketSize, Services, Proposal } = form
        // const {Logo}=file
        for (let key in form) {
            Data.append(key, form[key])
        }
        if (Name && Address && City && State && Email && PhoneNumber && CompanyName && Logo && Background && Product && Problem && Solution && Proposition &&
            Advantage && Revenue && MarketSize && Services && Proposal) {
            axios.post("http://localhost:4000/form", Data, {
                headers: { "x-auth-token": token },
              })
                .then((res => {
                    console.log(res,"success        message");
                    first.current.value = ''                    
                    product.current.value = ''
                    model.current.value = ''
                    customer.current.value = ''
                    unique.current.value = ''
                    market.current.value = ''
                    solve.current.value = ''
                    cpny.current.value = ''
                    back.current.value = ''
                    email.current.value = ''
                    state.current.value = ''
                    services.current.value = ''
                    second.current.value = ''
                    city.current.value = ''
                    phone.current.value = ''
                    advantage.current.value = ''
                    business.current.value = ''
                    logo.current.value=''

                }))
        } else {
            setError(true)
        }
    }
    return (
        <div>
            <form onSubmit={submit} className="w-full p-20" encType="multipart/form-data">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={first}
                            name='Name'
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            ref={second}
                            name='Address'
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={city}
                            name='City'
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            State
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            ref={state}
                            name='State'
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={email}
                            name='Email'
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            ref={phone}
                            name='PhoneNumber'
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Company Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={cpny}
                            name='CompanyName'
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Company Logo
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="file"
                            name='Logo'
                            ref={logo}
                            onChange={fileUpload}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Describe Your Team and Background
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={back}
                            name='Background'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Describe Your Company and Product
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={product}
                            name='Product'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Describe the problem your are trying to solve
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={solve}
                            name='Problem'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            What is unique about your solution
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={unique}
                            name='Solution'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            What is your value proposition for the customer?
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={customer}
                            name='Proposition'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Who are your competitors and what is your competative advantage?
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={advantage}
                            name='Advantage'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Explain your revenue model
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={model}
                            name='Revenue'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            What is the potential market size of the product?
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={market}
                            name='MarketSize'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            How do you market or plan to market your products and services
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={services}
                            name='Services'
                            onChange={handleChange} />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Upload a detailed business proposal
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            ref={business}
                            name='Proposal'
                            onChange={handleChange} />
                    </div>

                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        {error && <p className="text-red-500">Fill the form</p>}
                        <button
                            className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green-900 focus:outline-none focus:border-green-700`}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default ApplicationForm
