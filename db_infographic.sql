-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 31, 2018 at 04:32 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

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
  `number` varchar(10) NOT NULL,
  `info` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mmiw`
--

INSERT INTO `tbl_mmiw` (`ID`, `province`, `number`, `info`) VALUES
(1, 'BC', '75', ''),
(2, 'AB', '60', ''),
(3, 'MB', '66', ''),
(4, 'SK', '40', ''),
(5, 'ON', '30', ''),
(6, 'QC', '10', ''),
(7, 'NB', '2', ''),
(8, 'NL', '3', ''),
(9, 'PE', '0', ''),
(10, 'YT', '3', ''),
(11, 'NT', '5', ''),
(12, 'NU', '2', ''),
(13, 'NS', '0', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mmiw`
--
ALTER TABLE `tbl_mmiw`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mmiw`
--
ALTER TABLE `tbl_mmiw`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
