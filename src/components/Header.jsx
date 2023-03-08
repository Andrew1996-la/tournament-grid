import ButtonTheme from "../UI/ButtonTheme";

function Header(props) {
  return (
    <header className="h-[80px] dark:bg-bgDarkMode bg-bgLightMode">
      <h1 className="h-[100%] dark:text-textDarkMode text-textLightMode uppercase flex justify-center items-center">
        Приложение для построения турнирных таблиц
      </h1>
      <ButtonTheme />
    </header>
  );
}

export default Header;
