import {NavContainer, Icon, NavItem} from "./BottomNavigation.Styles"

export default function BottomNavigationUI(props){

    return (
        <NavContainer>
          <NavItem 
            active={props.activeTab === 'menu'} 
            onClick={() => props.handleNavigation('/menu', 'menu')}
          >
            <Icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="3" rx="1" fill="currentColor" />
                <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="17" width="18" height="3" rx="1" fill="currentColor" />
              </svg>
            </Icon>
          </NavItem>
          
          <NavItem 
            active={props.activeTab === 'home'} 
            onClick={() => props.handleNavigation('/', 'home')}
          >
            <Icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.25V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12.6 3.45C12.2466 3.17667 11.7534 3.17667 11.4 3.45L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" fill="currentColor" />
              </svg>
            </Icon>
          </NavItem>
          
          <NavItem 
            active={props.activeTab === 'profile'} 
            onClick={() => props.handleNavigation('/profile', 'profile')}
          >
            <Icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18V20H4V18Z" fill="currentColor" />
              </svg>
            </Icon>
          </NavItem>
        </NavContainer>
      );
}