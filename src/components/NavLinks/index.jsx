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
      active:true,
      icon:{
        image:dashboard,
        alt:'Imagem da dashboard'
      },
      text:'Dashboard'
    },

    {
      id:2,
      active:false,
      icon:{
        image:table,
        alt:'Imagem de Vendas'
      },
      text:'Vendas'
    },

    {
      id:3,
      active:false,
      icon:{
        image:money,
        alt:'Imagem de planos'
      },
      text:'Planos',
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
            href='#'
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <NavLink icon={{ image:logout, alt:'Ícone de logout'}} as='button' >
        Sair 
      </NavLink>


    </S.Wrapper >
  );
};

export default NavLinks;