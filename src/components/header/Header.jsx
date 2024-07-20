// import React, { useState } from "react";
// import { Modal, Box, Typography, Button } from "@mui/material";
// import "./Header.css";
// import html from "../../assets/png/html.png";

// const Header = () => {
// 	const [modalVisible, setModalVisible] = useState(false);
// 	const [modalContent, setModalContent] = useState("");

// 	const openModal = (content) => {
// 		setModalContent(content);
// 		setModalVisible(true);
// 	};

// 	const closeModal = () => {
// 		setModalVisible(false);
// 	};

// 	return (
// 		<>
// 			<header className="header">Welcome to JavaScript</header>
// 			<div className="component_div">
// 				<div className="img">
// 					<button className="button_html" onClick={() => openModal("html")}>
// 						HTML
// 					</button>

// 					<h1 className="text">Путь JavaScript</h1>

// 					<button className="button_css" onClick={() => openModal("css")}>
// 						CSS
// 					</button>
// 				</div>
// 			</div>

// 			<Modal
// 				open={modalVisible}
// 				onClose={closeModal}
// 				aria-labelledby="modal-title"
// 				aria-describedby="modal-description">
// 				<Box className="modal-content">
// 					{/* <Button className="close" onClick={closeModal}>
// 						&times;
// 					</Button> */}
// 					<Typography id="modal-title" variant="h6" component="h2">
// 						{modalContent === "html"
// 							? "Модальное окно для HTML"
// 							: modalContent === "css"
// 							? "Модальное окно для CSS"
// 							: "Неизвестное содержимое модального окна"}
// 					</Typography>
// 					<Typography id="modal-description" sx={{ mt: 2 }}>
// 						{modalContent === "html" ? (
// 							<>
// 								<h4 className="takoe_html">что такое HTML ?</h4>
// 								<img src={html} alt="" className="img_html" />
// 								<p>
// 									<h3>HTML -</h3> (от английского HyperText Markup Language) —
// 									это язык гипертекстовой разметки текста. Он нужен, чтобы
// 									размещать на веб-странице элементы: текст, картинки, таблицы и
// 									видео. Когда вы заходите на сайт, браузер подгружает HTML-файл
// 									с информацией о структуре и контенте веб-страницы. HTML как бы
// 									выстраивает визуальный фундамент сайта, но не «запускает» сайт
// 									самостоятельно. Он всего лишь указывает, где располагаются
// 									элементы, какой у них будет базовый дизайн, откуда брать стили
// 									для элементов и скрипты (обычно их пишут на JavaScript).
// 								</p>
// 								<div>
// 									<h2> 1-Структурные теги:</h2>
// 									<p>
// 										<h3>!DOCTYPE</h3> - Определяет тип документа и его версию.
// 										<h3> html -</h3>
// 										Определяет корневой элемент документа.
// 										<h3>head</h3> - Содержит метаданные документа, такие как
// 										заголовок страницы, ссылки на стили и скрипты.
// 										<h3>title</h3> - Устанавливает заголовок документа, который
// 										отображается на вкладке браузера или в заголовке окна.
// 										<h3>body</h3> - Содержит содержимое документа, отображаемое
// 										в браузере.
// 									</p>
// 									<p>
// 										<h2> Теги для текстового содержимого: </h2>
// 										<h3>h1 to h6</h3> - Заголовки разных уровней.
// 										<h3>p</h3> - Параграф текста.
// 										<h3>br</h3> - Перенос строки.
// 										<h3>hr</h3> - Горизонтальная линия.
// 									</p>
// 									<p>
// 										<h2> Теги для структуры и списков:</h2>
// 										<h3>div</h3> - Группирует элементы и создаёт блоки.
// 										<h3>span</h3> - Группирует текстовые элементы внутри других
// 										элементов.
// 										<h3>ul</h3> - Неупорядоченный список.
// 										<h3>ol</h3> - Упорядоченный список.
// 										<h3>li</h3> - Элемент списка.
// 									</p>
// 									<p>
// 										<h2> Теги для ссылок и мультимедиа: </h2>
// 										<h3>a</h3>- Создаёт гиперссылку.
// 										<h3>img</h3> - Вставляет изображение.
// 										<h3>audio</h3> - Вставляет звуковой файл.
// 										<h3>video</h3> - Вставляет видео файл.
// 									</p>
// 									<p>
// 										<h3> Теги для таблиц: </h3>
// 										<h3>table</h3> - Определяет таблицу.
// 										<h3>tr</h3> - Определяет строку таблицы.
// 										<h3>td</h3> - Определяет ячейку данных таблицы.
// 										<h3>th</h3> - Определяет ячейку заголовка таблицы.
// 									</p>
// 									<p>
// 										<h3> Теги для форм: </h3>
// 										<h3>form</h3> - Определяет форму для ввода данных.
// 										<h3>input</h3> - Определяет поле ввода.
// 										<h3>textarea</h3> - Определяет многострочное текстовое поле.
// 										<h3>button</h3> - Определяет кнопку.
// 									</p>
// 									<p>
// 										<h2> Другие полезные теги:</h2>
// 										<h3>meta</h3> - Определяет метаданные документа.
// 										<h3>script</h3> - Вставляет скрипт или ссылку на скрипт.
// 										<h3>style</h3> - Определяет стили CSS для документа.
// 										<h3>iframe</h3> - Вставляет встроенный фрейм.
// 									</p>
// 								</div>
// 								<Button className="close" onClick={closeModal}>
// 									&times;
// 								</Button>
// 							</>
// 						) : modalContent === "css" ? (
// 							<>
// 								<h4>Что такое css</h4>
// 								<h2>CSS:</h2>
// 								CSS (Cascading Style Sheets) — это язык таблиц стилей,
// 								используемый для описания внешнего вида документа, написанного
// 								на языке разметки, таком как HTML или XML. Основная цель CSS —
// 								разделение содержимого и его представления, что позволяет легко
// 								изменять стиль и внешний вид веб-страницы без изменения её
// 								структуры.

// 								<h2>Основные понятия CSS:</h2>





// <h2>Селекторы:</h2>
// Селекторы определяют, к каким элементам HTML будет применяться стиль. Например, селектор h1 применяется к всем элементам заголовка первого уровня (<h1>).
// Свойства и значения:

// <h2>Свойства:</h2> задают конкретные аспекты стиля, такие как цвет текста (color), размер шрифта (font-size), отступы (margin, padding), и т.д.
// {/* Значения определяют, какие именно характеристики будут применены к элементам, например, red для цвета или 20px для размера шрифта.
// Каскадность и наследование: */}


// <h2>Каскадность:</h2> означает, что стили могут наследоваться от родительских элементов и перезаписываться более специфическими стилями. Это позволяет легко управлять стилями на разных уровнях иерархии элементов.
// Наследование — это процесс передачи некоторых свойств от родительского элемента его потомкам. Например, цвет текста может наследоваться от родительского элемента для всех его дочерних элементов.
// Группировка и наследование:

// Селекторы могут группироваться вместе, чтобы применять один и тот же набор стилей к нескольким элементам одновременно, что делает код CSS более компактным и управляемым.
// Наследование позволяет экономить время и усилия при настройке стилей, поскольку потомки автоматически наследуют стили от своих родителей.
// 								<Button className="close" onClick={closeModal}>
// 									&times;
// 								</Button>
// 							{/* </> */}
// 						) : (
// 							<>Неизвестное содержимое модального окна.</>
// 						)}
// 					</Typography>
// 				</Box>
// 			</Modal>
// 		</>
// 	);
// };

// export default Header;


import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "./Header.css"; // Подключение стилей
import html from "../../assets/png/html.png"; // Путь к изображению

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Функция для открытия модального окна с заданным контентом
  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <header className="header">Welcome to JavaScript</header>
      <div className="component_div">
        <div className="img">
          <button className="button_html" onClick={() => openModal("html")}>
            HTML
          </button>

          <h1 className="text">Путь JavaScript</h1>

          <button className="button_css" onClick={() => openModal("css")}>
            CSS
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      <Modal
        open={modalVisible}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-content">
          <Button className="close" onClick={closeModal}>
            &times;
          </Button>
          <Typography id="modal-title" variant="h6" component="h2">
            {modalContent === "html" ? (
              "Модальное окно для HTML"
            ) : modalContent === "css" ? (
              "Модальное окно для CSS"
            ) : (
              "Неизвестное содержимое модального окна"
            )}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {modalContent === "html" ? (
              <>
                <h4 className="takoe_html">Что такое HTML?</h4>
                <img src={html} alt="" className="img_html" />
                <p>
                  <strong>HTML</strong> (от английского HyperText Markup
                  Language) — это язык гипертекстовой разметки текста. Он
                  нужен, чтобы размещать на веб-странице элементы: текст,
                  картинки, таблицы и видео. Когда вы заходите на сайт, браузер
                  подгружает HTML-файл с информацией о структуре и контенте
                  веб-страницы.
                </p>
                <div>
                  <h2>Структурные теги:</h2>
                  <p>
                    <strong>!DOCTYPE</strong> - Определяет тип документа и его
                    версию.
                    <br />
                    <strong>html</strong> - Определяет корневой элемент
                    документа.
                    <br />
                    <strong>head</strong> - Содержит метаданные документа, такие
                    как заголовок страницы, ссылки на стили и скрипты.
                    <br />
                    <strong>title</strong> - Устанавливает заголовок документа,
                    который отображается на вкладке браузера или в заголовке
                    окна.
                    <br />
                    <strong>body</strong> - Содержит содержимое документа,
                    отображаемое в браузере.
                  </p>
                </div>
                <div>
                  <h2>Теги для текстового содержимого:</h2>
                  <p>
                    <strong>h1</strong> to <strong>h6</strong> - Заголовки
                    разных уровней.
                    <br />
                    <strong>p</strong> - Параграф текста.
                    <br />
                    <strong>br</strong> - Перенос строки.
                    <br />
                    <strong>hr</strong> - Горизонтальная линия.
                  </p>
                </div>
                <div>
                  <h2>Теги для структуры и списков:</h2>
                  <p>
                    <strong>div</strong> - Группирует элементы и создаёт блоки.
                    <br />
                    <strong>span</strong> - Группирует текстовые элементы внутри
                    других элементов.
                    <br />
                    <strong>ul</strong> - Неупорядоченный список.
                    <br />
                    <strong>ol</strong> - Упорядоченный список.
                    <br />
                    <strong>li</strong> - Элемент списка.
                  </p>
                </div>
                <div>
                  <h2>Теги для ссылок и мультимедиа:</h2>
                  <p>
                    <strong>a</strong> - Создаёт гиперссылку.
                    <br />
                    <strong>img</strong> - Вставляет изображение.
                    <br />
                    <strong>audio</strong> - Вставляет звуковой файл.
                    <br />
                    <strong>video</strong> - Вставляет видео файл.
                  </p>
                </div>
                <div>
                  <h2>Теги для таблиц:</h2>
                  <p>
                    <strong>table</strong> - Определяет таблицу.
                    <br />
                    <strong>tr</strong> - Определяет строку таблицы.
                    <br />
                    <strong>td</strong> - Определяет ячейку данных таблицы.
                    <br />
                    <strong>th</strong> - Определяет ячейку заголовка таблицы.
                  </p>
                </div>
                <div>
                  <h2>Теги для форм:</h2>
                  <p>
                    <strong>form</strong> - Определяет форму для ввода данных.
                    <br />
                    <strong>input</strong> - Определяет поле ввода.
                    <br />
                    <strong>textarea</strong> - Определяет многострочное
                    текстовое поле.
                    <br />
                    <strong>button</strong> - Определяет кнопку.
                  </p>
                </div>
                <div>
                  <h2>Другие полезные теги:</h2>
                  <p>
                    <strong>meta</strong> - Определяет метаданные документа.
                    <br />
                    <strong>script</strong> - Вставляет скрипт или ссылку на
                    скрипт.
                    <br />
                    <strong>style</strong> - Определяет стили CSS для документа.
                    <br />
                    <strong>iframe</strong> - Вставляет встроенный фрейм.
                  </p>
                </div>
              </>
            ) : modalContent === "css" ? (
              <>
                <h4>Что такое CSS</h4>
                <h2>CSS:</h2>
                <p>
                  CSS (Cascading Style Sheets) — это язык таблиц стилей,
                  используемый для описания внешнего вида документа, написанного
                  на языке разметки, таком как HTML или XML. Основная цель CSS —
                  разделение содержимого и его представления, что позволяет
                  легко изменять стиль и внешний вид веб-страницы без изменения
                  её структуры.
                </p>
                <div>
                  <h2>Основные понятия CSS:</h2>
                  <p>
                    <strong>Селекторы:</strong> Селекторы определяют, к каким
                    элементам HTML будет применяться стиль. Например, селектор
                    h1 применяется к всем элементам заголовка первого уровня
                    {/* (<h1>. */}
                  </p>
                  <p>
                    <strong>Свойства и значения:</strong> Свойства задают
                    конкретные аспекты стиля, такие как цвет текста (color),
                    размер шрифта (font-size), отступы (margin, padding), и
                    т.д.
                  </p>
                  <p>
                    <strong>Каскадность и наследование:</strong> Каскадность
                    означает, что стили могут наследоваться от родительских
                    элементов и перезаписываться более специфическими стилями.
                    Это позволяет легко управлять стилями на разных уровнях
                    иерархии элементов. Наследование — это процесс передачи
                    некоторых свойств от родительского элемента его потомкам.
                    Например, цвет текста может наследоваться от родительского
                    элемента для всех его дочерних элементов.
                  </p>
                  <p>
                    <strong>Группировка и наследование:</strong> Селекторы могут
                    группироваться вместе, чтобы применять один и тот же набор
                    стилей к нескольким элементам одновременно, что делает код
                    CSS более компактным и управляемым. Наследование позволяет
                    экономить время и усилия при настройке стилей, поскольку
                    потомки автоматически наследуют стили от своих родителей.
                  </p>
                </div>
                <Button className="close" onClick={closeModal}>
                  &times;
                </Button>
              </>
            ) : (
              "Неизвестное содержимое модального окна."
            )}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
