-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2021 at 10:09 AM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin'),
(2, '', '', ''),
(3, 'admin1', 'admin1@gmail.com', 'admin1'),
(4, 'admin2', 'admin2@gmail.com', 'admin2');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(12) NOT NULL,
  `email` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(6) NOT NULL,
  `description` varchar(200) NOT NULL,
  `category` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `quantity` int(12) NOT NULL,
  `grand_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `email`, `title`, `price`, `description`, `category`, `image`, `quantity`, `grand_total`) VALUES
(1, 'admin1@gmail.com', 'real me 7', '19999', '6 GB RAM ,\r\n64 GB ROM,\r\n64MP+8MP+2MP+2MP|16MP FRONT CAMERA,\r\n5000 mAh lithim-ion Battery', 'Android', '../../../assets/img/real_me_7.jpg', 1, 0),
(2, '', 'MI Note 10', '15499', '4GB RAM,\r\n64GB STORAGE,\r\n48MP quad rear camera 13MP Front camera\r\n5000mAh large battery\r\n', 'Android', '../../../assets/img/minote10.jfif', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` int(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `category` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `email`, `title`, `price`, `description`, `category`, `image`) VALUES
(1, 'admin1@gmail.com', 'real me 7', 19999, '6 GB RAM ,\r\n64 GB ROM,\r\n64MP+8MP+2MP+2MP|16MP FRONT CAMERA,\r\n5000 mAh lithim-ion Battery', 'Android', '../../../assets/img/real_me_7.jpg'),
(2, 'admin1@gmail.com', 'MI Note 10', 15499, '4GB RAM,\r\n64GB STORAGE,\r\n48MP quad rear camera 13MP Front camera\r\n5000mAh large battery\r\n', 'Android', '../../../assets/img/minote10.jfif'),
(3, 'admin1@gmail.com', 'Samsung Galaxy Note 20', 44999, '8GB RAM,256GB Storage,\r\n64+12+12MP triple rearcamera,\r\n4300mAh Battery', 'Android', '../../../assets/img/samsung_note20.jpg'),
(4, 'admin1@gmail.com', 'Apple iPhone 12', 63999, '4GB RAM,128 GB ROM,\r\n2775mAh lithium-ion battery', 'Apple', '../../../assets/img/iphone12.jfif'),
(5, 'admin1@gmail.com', 'Apple iPhone 13 pro max', 129900, 'gold ,256 GB ROM', 'Apple', '../../../assets/img/iphone13promax.jfif'),
(6, 'admin1@gmail.com', 'Samsung Galaxy M32', 22999, '8GB RAM,\r\n128GB Storage,\r\n5000mAh battery,\r\nTrue 48MP Quad Camera+13MP Front Camera', 'Android', '../../../assets/img/Samsung-Galaxy-M32.jpg'),
(7, 'admin1@gmail.com', 'Vivo Y73', 20990, '8GB RAM,128GB Storage,\r\n64 +2+ 2MP Camera', 'Android', '../../../assets/img/vivo_y73.jfif'),
(8, 'admin1@gmail.com', 'realme 8', 17979, '8GB RAM,128GB Storage\r\n64MP AI Quad Camera,\r\n5000mAh Battery', 'Android', '../../../assets/img/realme8.jfif'),
(9, 'admin1@gmail.com', 'MI 11X', 27999, '6GB RAM,128GB ROM,\r\n48MP Triple ProCamera setup\r\nLong Battery Life', 'Android', '../../../assets/img/mi11x.jfif'),
(10, 'admin1@gmail.com', 'Sansung A70s', 19999, '8GB RAM,128GB Storage,\r\nProcessor Qualcomm SM6150,\r\n64 + 8+ 5MP Rear Camera\r\n4500mAh Bayttery', 'Android', '../../../assets/img/samsungA70s.jfif'),
(11, 'admin1@gmail.com', 'Samsung Galaxy A22', 18499, '6GB RAM,128GB Storage,\r\n48+8+2+2MP rear Camera,13MP Front Camera\r\n5000mAh Battery', 'Android', '../../../assets/img/samsungA22.jfif'),
(12, 'admin1@gmail.com', 'Samsung Galaxy F42', 22999, '8 GB RAM |128GB ROM,\r\n64MP Rear Camera+ 8MP front Camera\r\n5000mAh Battery', 'Android', '../../../assets/img/samsungF42.jfif'),
(13, 'admin1@gmail.com', 'Samsung Galaxy Note 20 Ultra 5GG', 104999, '12GB RAM | 256 GB Storage,\r\n108MP +12MP + 12MP Rear Camera\r\n4500mAh Battery', 'Android', '../../../assets/img/samsangnote20ultra.jfif'),
(14, 'admin1@gmail.com', 'Mi A2', 11885, '4GB RAM | 64 GB ROM,\r\n20MP +12MP Camera,\r\n3010 mAh Battery', 'Android', '../../../assets/img/MIa2.jfif'),
(15, 'admin1@gmail.com', 'MI 10i', 24998, '6GB RAM | 128 GB ROM,\r\n108MP + 8MP + 2MP +2MP REAR CAMERA\r\n4820mAh Battery', 'Android', '../../../assets/img/mi10i.jfif'),
(16, 'admin1@gmail.com', 'Mi 11X 5G', 28949, '6GB RAM |128 GB ROM,\r\n48MP CAMERA,\r\n4520 mAh Battery', 'Android', '../../../assets/img/mi11x5g.jfif'),
(17, 'admin1@gmail.com', 'Mi 11 Lite', 23999, '8 GB RAM | 128 GB ROM,\r\n64 MP +8MP + 5MP REAR CAMERA,\r\n4250mAh Battery', 'Android', '../../../assets/img/mi11lite.jfif'),
(18, 'admin1@gmail.com', 'vivo Y33s', 18999, '8GB RAM |128 GB ROM,\r\n50 MP REAR CAMERA\r\n5000mAh Battery', 'Android', '../../../assets/img/vivoy33s.jfif'),
(19, 'admin1@gmail.com', 'vivo V20', 27990, '8 GB RAM |256 GB ROM,\r\n64 + 8 + 2MP REAR CAMERA', 'Android', '../../../assets/img/vivo_v20.jfif'),
(20, 'admin1@gmail.com', 'OPPO RENO6', 29990, '8GB RAM |128 GB ROM,\r\n64 MP TRIPLE CAMERA+ 32MP FRONT CAMERA\r\n4300mAh Battery', 'Android', '../../../assets/img/opporeno6.jfif'),
(21, 'admin1@gmail.com', 'OPPO A55', 17490, '6GB RAM |128 GB ROM,\r\n50MP CAMERA\r\n5000mAh Battery', 'Android', '../../../assets/img/oppoA55.jfif'),
(22, 'admin1@gmail.com', 'OPPO F19S', 19990, '6 GB RAM | 128GB ROM,\r\n48MP + 2 +2MP REAR CAMERA\r\n5000mAh Battery', 'Android', '../../../assets/img/oppoF19s.jfif'),
(23, 'admin1@gmail.com', 'Apple Iphone 12 Mini', 44999, '64 GB ROM\r\n12MP + 12MP REAR CAMERA\r\nA14 Bionic chip with next generation neural engine', 'Apple', '../../../assets/img/iphone12mini.jfif'),
(24, 'admin1@gmail.com', 'Apple iphone 11', 54900, '128 GB ROM\r\nA13 Bionic Chip\r\n12MP + 12MP Camera\r\n6.1 inch Display', 'Apple', '../../../assets/img/11pro.jfif'),
(25, 'admin1@gmail.com', 'Apple iphone 12 pro', 109900, '128 GM ROM,\r\n12MP +12MP+12MP REAR CAMERA\r\n6.1 INCH Super RETINA XDR Disply', 'Apple', '../../../assets/img/12pro.jfif'),
(26, 'admin1@gmail.com', 'Apple iphone 11 pro', 117900, '512 GB ROM\r\nA13 BIONIC CHIP\r\n12MP + 12MP + 12MP REAR CAMERA\r\n5.8 INCH DISPLY', 'Apple', '../../../assets/img/11pro.jfif'),
(27, 'admin1@gmail.com', 'APPLE IPHONE 13 PRO', 119900, '128 GB ROM\r\nA15 BIONIC CHIP\r\n12MP+ 12MP +12MP REAR CAMERA', 'Apple', '../../../assets/img/13pro.jfif'),
(28, 'admin1@gmail.com', 'APPLE IPHONE 11 PRO MAX', 117100, '64 GB ROM\r\nA13 BIONIC CHIP\r\n12MP + 12MP + 12MP\r\n6.5 INCH DISPLAY', 'Apple', '../../../assets/img/11promax.jfif'),
(29, 'admin1@gmail.com', 'APPLE IPHONE 13 MINI', 69900, '128 GB ROM\r\nA15 BIONIC CHIP\r\n12MP +12MP REAR CAMERA', 'Apple', '../../../assets/img/13mini.jfif'),
(30, 'admin1@gmail.com', 'APPLE IPHONE PRO MAX', 119900, '128GB ROM\r\nA14 BIONIC CHIP\r\n12MP + 12MP +12MP REAR CAMERA', 'Apple', '../../../assets/img/12promax.jfif'),
(32, 'admin2@gmail.com', 'Samsung', 20000, 'abc', 'Android', '../../../assets/img/samsung_note20.jpg'),
(34, 'admin1@gmail.com', 'apple iphone6', 25000, 'abcdefghijklmnopqrstuvwxyz', 'Apple', '../../../assets/img/13pro.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `ship`
--

CREATE TABLE `ship` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zip` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ship`
--

INSERT INTO `ship` (`id`, `name`, `email`, `address`, `city`, `state`, `zip`) VALUES
(128, 'Parth Patadiya', 'a@gmail.com', 'abcdefghjklmnopqrstuvwxyz', 'rajkot', 'gujrat', 360002),
(130, 'Parth Patadiya', 'admin1@gmail.com', 'abcdefghjklmnopqrstuvwxyz', 'rajkot', 'gujrat', 360002);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES
(52, '', '', ''),
(53, 'a', 'a', 'a@gmail.com'),
(54, 'ab', 'ab', 'ab@gmail.com'),
(55, 'abc', 'abc', 'abc@gmail.com'),
(56, 'abcd', 'abcd', 'abcd@gmail.com'),
(57, 'Parth Patadiya', 'aa', 'p@gmail.com'),
(58, 'Parth Patadiya', 'a', 'x@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ship`
--
ALTER TABLE `ship`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `ship`
--
ALTER TABLE `ship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
