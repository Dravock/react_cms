-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 25. Mrz 2023 um 16:02
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `react_cms`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `react_cms_jwt`
--

CREATE TABLE `react_cms_jwt` (
  `id` int(255) NOT NULL,
  `jwt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `react_cms_jwt`
--

INSERT INTO `react_cms_jwt` (`id`, `jwt`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2b3JuYW1lIjoiZGVyeWFuIiwibmFjaG5hbWUiOiJrZXNraW4iLCJlbWFpbCI6ImRlcnlhbkBrZXNraW4tbmV1YnVsYWNoLmRlIiwiZXhwIjoiMTY3OTYyMjg1MiJ9.wNuB1cLWjLTY06s_s5_ijx-0YP7tId8eOQJotk_5W18');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `react_cms_options`
--

CREATE TABLE `react_cms_options` (
  `id` int(11) NOT NULL,
  `project_init` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `react_cms_options`
--

INSERT INTO `react_cms_options` (`id`, `project_init`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `react_cms_user`
--

CREATE TABLE `react_cms_user` (
  `id` int(255) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `adress` varchar(50) NOT NULL,
  `citycode` varchar(15) NOT NULL,
  `city` varchar(50) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `react_cms_user`
--

INSERT INTO `react_cms_user` (`id`, `user_name`, `user_password`, `adress`, `citycode`, `city`, `first_name`, `last_name`, `mail`) VALUES
(1, 'dravock', '$2y$10$wQ8C1bG51RciSzcxLrGe4uEY0gVtEaZHaEKE97rYSW7zkTna0Czdm', 'Sommerbergstraße 5', '75387', 'Neubulach', 'deryan', 'keskin', 'deryan@keskin-neubulach.de');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `react_cms_jwt`
--
ALTER TABLE `react_cms_jwt`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fk_user_id` (`id`);

--
-- Indizes für die Tabelle `react_cms_options`
--
ALTER TABLE `react_cms_options`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `react_cms_user`
--
ALTER TABLE `react_cms_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `react_cms_options`
--
ALTER TABLE `react_cms_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `react_cms_user`
--
ALTER TABLE `react_cms_user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `react_cms_jwt`
--
ALTER TABLE `react_cms_jwt`
  ADD CONSTRAINT `react_cms_jwt_ibfk_1` FOREIGN KEY (`id`) REFERENCES `react_cms_user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
