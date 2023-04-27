import { Avatar, Dropdown, Navbar } from "flowbite-react"


export const CryptoNavbar = () => {
  return (
    <Navbar className="shadow-md" fluid={true} rounded={true}>
        <Navbar.Brand href="https://www.disruptivestudio.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Calculator
          </span>
        </Navbar.Brand>
        <div className="flex mr-4 md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                status="online"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Williams Galeano</span>
              <span className="block truncate text-sm font-medium">
                willyrhcp96@gmail.com
              </span>
            </Dropdown.Header>           
          </Dropdown>
          <Navbar.Toggle />
        </div>       
      </Navbar>
  )
}
