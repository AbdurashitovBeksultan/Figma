import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "./Header.css";
import html from "../../assets/png/html.png";

const Header = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState("");

	const openModal = (content) => {
		setModalContent(content);
		setModalVisible(true);
	};

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

			<Modal
				open={modalVisible}
				onClose={closeModal}
				aria-labelledby="modal-title"
				aria-describedby="modal-description">
				<Box className="modal-content">
					{/* <Button className="close" onClick={closeModal}>
						&times;
					</Button> */}
					<Typography id="modal-title" variant="h6" component="h2">
						{modalContent === "html"
							? "Модальное окно для HTML"
							: modalContent === "css"
							? "Модальное окно для CSS"
							: "Неизвестное содержимое модального окна"}
					</Typography>
					<Typography id="modal-description" sx={{ mt: 2 }}>
						{modalContent === "html" ? (
							<>
								что такое HTML ?
								<img src={html} alt="" className="img_html" />
								<p>
									<h3>HTML -</h3> (от английского HyperText Markup Language) —
									это язык гипертекстовой разметки текста. Он нужен, чтобы
									размещать на веб-странице элементы: текст, картинки, таблицы и
									видео. Когда вы заходите на сайт, браузер подгружает HTML-файл
									с информацией о структуре и контенте веб-страницы. HTML как бы
									выстраивает визуальный фундамент сайта, но не «запускает» сайт
									самостоятельно. Он всего лишь указывает, где располагаются
									элементы, какой у них будет базовый дизайн, откуда брать стили
									для элементов и скрипты (обычно их пишут на JavaScript).
								</p>
								<div>
									<h2> 1-Структурные теги:</h2>
									<p>
										<h3>!DOCTYPE</h3> - Определяет тип документа и его версию.
										<h3> html -</h3>
										Определяет корневой элемент документа.
										<h3>head</h3> - Содержит метаданные документа, такие как
										заголовок страницы, ссылки на стили и скрипты.
										<h3>title</h3> - Устанавливает заголовок документа, который
										отображается на вкладке браузера или в заголовке окна.
										<h3>body</h3> - Содержит содержимое документа, отображаемое
										в браузере.
									</p>
									<p>
										<h2> Теги для текстового содержимого: </h2>
										<h3>h1 to h6</h3> - Заголовки разных уровней.
										<h3>p</h3> - Параграф текста.
										<h3>br</h3> - Перенос строки.
										<h3>hr</h3> - Горизонтальная линия.
									</p>
									<p>
										<h2> Теги для структуры и списков:</h2>
										<h3>div</h3> - Группирует элементы и создаёт блоки.
										<h3>span</h3> - Группирует текстовые элементы внутри других
										элементов.
										<h3>ul</h3> - Неупорядоченный список.
										<h3>ol</h3> - Упорядоченный список.
										<h3>li</h3> - Элемент списка.
									</p>
									<p>
										<h2> Теги для ссылок и мультимедиа: </h2>
										<h3>a</h3>- Создаёт гиперссылку.
										<h3>img</h3> - Вставляет изображение.
										<h3>audio</h3> - Вставляет звуковой файл.
										<h3>video</h3> - Вставляет видео файл.
									</p>
									<p>
										<h3> Теги для таблиц: </h3>
										<h3>table</h3> - Определяет таблицу.
										<h3>tr</h3> - Определяет строку таблицы.
										<h3>td</h3> - Определяет ячейку данных таблицы.
										<h3>th</h3> - Определяет ячейку заголовка таблицы.
									</p>
									<p>
										<h3> Теги для форм: </h3>
										<h3>form</h3> - Определяет форму для ввода данных.
										<h3>input</h3> - Определяет поле ввода.
										<h3>textarea</h3> - Определяет многострочное текстовое поле.
										<h3>button</h3> - Определяет кнопку.
									</p>
									<p>
										<h2> Другие полезные теги:</h2>
										<h3>meta</h3> - Определяет метаданные документа.
										<h3>script</h3> - Вставляет скрипт или ссылку на скрипт.
										<h3>style</h3> - Определяет стили CSS для документа.
										<h3>iframe</h3> - Вставляет встроенный фрейм.
									</p>
								</div>
								<Button className="close" onClick={closeModal}>
									&times;
								</Button>
							</>
						) : modalContent === "css" ? (
							<>
								Содержимое модального окна для CSS.
								<br />
								Здесь может быть любой контент, связанный с CSS.
								<Button className="close" onClick={closeModal}>
									&times;
								</Button>
							</>
						) : (
							<>Неизвестное содержимое модального окна.</>
						)}
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default Header;
