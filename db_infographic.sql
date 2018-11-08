-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
-- 
-- Host: localhost:3306
-- Generation Time: Nov 08, 2018 at 01:12 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1
-- Author: Joanna Baile

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mmiw`
--

CREATE TABLE `tbl_mmiw` (
  `ID` int(10) UNSIGNED NOT NULL,
  `province` varchar(15) NOT NULL,
  `number` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mmiw`
--

INSERT INTO `tbl_mmiw` (`ID`, `province`, `number`) VALUES
(1, 'BC', '75'),
(2, 'AB', '60'),
(3, 'MB', '66'),
(4, 'SK', '40'),
(5, 'ON', '30'),
(6, 'QC', '10'),
(7, 'NB', '2'),
(8, 'NL', '3'),
(9, 'PE', '0'),
(10, 'YT', '3'),
(11, 'NT', '5'),
(12, 'NU', '2'),
(13, 'NS', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rankin`
--

CREATE TABLE `tbl_rankin` (
  `id` int(10) UNSIGNED NOT NULL,
  `city` varchar(25) NOT NULL,
  `population` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_rankin`
--

INSERT INTO `tbl_rankin` (`id`, `city`, `population`) VALUES
(1, 'Rankin Inlet', '2,842');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resources`
--

CREATE TABLE `tbl_resources` (
  `ID` int(10) UNSIGNED NOT NULL,
  `resource` varchar(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `info` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_resources`
--

INSERT INTO `tbl_resources` (`ID`, `resource`, `title`, `info`) VALUES
(1, 'phone', 'Assistance', 'If you know or have information about MMIW, please contact your local police station'),
(2, 'leaf', 'Resources', 'If you need assistance and need resources, please visit http://mmiwontario.ca/ for more information'),
(3, 'turtle', 'Turtle Island', 'We are all in Turtle Island - remember to take care of one another and the beautiful place that we live in.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mmiw`
--
ALTER TABLE `tbl_mmiw`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_rankin`
--
ALTER TABLE `tbl_rankin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_resources`
--
ALTER TABLE `tbl_resources`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mmiw`
--
ALTER TABLE `tbl_mmiw`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_rankin`
--
ALTER TABLE `tbl_rankin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_resources`
--
ALTER TABLE `tbl_resources`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
