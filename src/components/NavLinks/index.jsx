import NavLink from 'components/NavLink';

import dashboard from 'assets/icons/dashboard.png';
import money from 'assets/icons/money.png';
import table from 'assets/icons/table.png';
import logout from 'assets/icons/logout.png';

import * as S from './styles';

const NavLinks = () =>{
  const links = [ 
    {
      id:1,
      icon:{
        image:dashboard,
        alt:'Imagem da dashboard'
      },
      text:'Dashboard',
      path:'/'
    },

    {
      id:2,
      icon:{
        image:table,
        alt:'Imagem de Vendas'
      },
      text:'Vendas',
      path:'/vendas'
    },

    {
      id:3,
      icon:{
        image:money,
        alt:'Imagem de planos'
      },
      text:'Planos',
      path:'/planos'
    },
  ];

  return(
    <S.Wrapper>
      <div>
        {links.map (link =>(
          <NavLink 
            key={link.id} 
            icon={link.icon} 
            active={link.active}
            path = {link.path}
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <NavLink icon={{ image:logout, alt:'Ícone de logout'}} >
        Sair 
      </NavLink>
    </S.Wrapper >
  );
};

export default NavLinks;