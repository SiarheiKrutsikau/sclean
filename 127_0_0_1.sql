-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 12 2022 г., 23:15
-- Версия сервера: 5.7.33
-- Версия PHP: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `in_user`
--
CREATE DATABASE IF NOT EXISTS `in_user` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `in_user`;

-- --------------------------------------------------------

--
-- Структура таблицы `newuser`
--

CREATE TABLE `newuser` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeuborki` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `allplace` int(10) DEFAULT NULL,
  `price_place` int(10) DEFAULT NULL,
  `price_type` int(10) DEFAULT NULL,
  `one_metr` int(10) DEFAULT NULL,
  `price_all` int(10) DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `newuser`
--

INSERT INTO `newuser` (`id`, `name`, `typeuborki`, `allplace`, `price_place`, `price_type`, `one_metr`, `price_all`, `phone`) VALUES
(1, 'Elena', 'all', 1, 2, 3, 4, 5, '+555555555555'),
(2, '/Alex/\\', '2', 3, 4, 5, 6, 7, '8'),
(3, '1', '2', 3, 4, 5, 6, 7, '8'),
(4, '1', '2', 3, 4, 5, 6, 7, '8'),
(7, '1', '2', 3, 4, 5, 6, 7, '8'),
(8, '1', '2', 3, 4, 5, 6, 7, '8'),
(33, '1', '2', 3, 4, 5, 6, 7, '8'),
(34, '1', '2', 3, 4, 5, 6, 7, '8'),
(35, '1', '2', 3, 4, 5, 6, 7, '8'),
(36, '1', '2', 3, 4, 5, 6, 7, '8');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `newuser`
--
ALTER TABLE `newuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `newuser`
--
ALTER TABLE `newuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- База данных: `one`
--
CREATE DATABASE IF NOT EXISTS `one` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `one`;
--
-- База данных: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Структура таблицы `r`
--

CREATE TABLE `r` (
  `id` int(5) NOT NULL,
  `product` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(5) UNSIGNED DEFAULT NULL,
  `price` int(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `r`
--

INSERT INTO `r` (`id`, `product`, `quantity`, `price`) VALUES
(1, 'мандарин', 1, 100),
(3, 'груши', 100, 1000),
(5, 'груши', 100, 1000),
(6, 'груши', 100, 1000),
(7, 'груши', 100, 1000),
(8, 'груши', 100, 1000),
(9, 'груши', 100, 1000),
(11, 'груши', 100, 1000),
(12, 'груши', 100, 1000),
(13, 'груши', 100, 1000),
(14, 'груши', 100, 1000),
(15, 'груши', 100, 1000),
(16, 'персик', 99, 444),
(17, 'персик', 99, 444),
(18, 'персик', 99, 444);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `r`
--
ALTER TABLE `r`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `r`
--
ALTER TABLE `r`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
