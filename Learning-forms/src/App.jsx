import './App.css'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold m-4'>Learning React Forms</h1>
      <form className='flex flex-col gap-2 m-4 w-1/2 mx-auto'>
        <label htmlFor="name">Name</label>
        <input className='border-2 border-gray-300 rounded-md p-2' type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input className='border-2 border-gray-300 rounded-md p-2' type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input className='border-2 border-gray-300 rounded-md p-2' type="password" id="password" name="password" />
        <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
