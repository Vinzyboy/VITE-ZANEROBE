-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 08:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zanerobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` int(11) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(1, 1, 'Pants', 2024, 0),
(2, 1, 'Tshirt', 2024, 2024);

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `clothes_aid` int(11) NOT NULL,
  `clothes_title` varchar(50) NOT NULL,
  `clothes_price` int(11) NOT NULL,
  `clothes_size` int(11) NOT NULL,
  `clothes_category_id` int(11) NOT NULL,
  `clothes_image` varchar(20) NOT NULL,
  `clothes_is_active` tinyint(1) NOT NULL,
  `clothes_datetime` int(11) NOT NULL,
  `clothes_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`clothes_aid`, `clothes_title`, `clothes_price`, `clothes_size`, `clothes_category_id`, `clothes_image`, `clothes_is_active`, `clothes_datetime`, `clothes_created`) VALUES
(1, 'qwer', 1, 124, 32, '2', 1, 2024, 2024),
(2, 'fd', 1, 234, 4, '2', 0, 2024, 2024),
(3, 'qwer', 1, 1234, 43, '2', 0, 2024, 2024),
(4, 'gh', 1, 54, 45, '2', 0, 2024, 2024),
(5, 'qwer', 1, 123, 12, '2', 0, 2024, 2024),
(6, 'qwer', 1, 123, 32, '2', 0, 2024, 2024),
(7, 'damit', 1, 200, 32, '2', 0, 2024, 2024),
(8, 'qwepqwernasdf', 123454, 124, 2, 'slider1.jpg', 1, 2024, 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`clothes_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `clothes_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
