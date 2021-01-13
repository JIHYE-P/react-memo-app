const Layout = ({children, tailwind, ...props}) => {
  return <section {...props} className='w-1/2'>
    {children}
  </section>
}

export default Layout;