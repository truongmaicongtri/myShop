-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2019 at 12:23 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `whatshop_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `username` varchar(10) NOT NULL,
  `password` char(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mediaid` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`username`, `password`, `mediaid`) VALUES
('tien', '$2y$10$zBM1iDa4QpthqWpZBjf4SeorWkVnqDVOw0ThdXsPIOKdzGt/YXkZa', NULL),
('tri', '$2y$10$aRIwNVFBBt2LA9NVfr.vn.zU6INRSTGZDPV5a1J4QS9ClBrkpw/2S', NULL),
('trichuot', '$2y$10$rOXlh/N1uovO2PXwGu6UL.63Du1C5idAJXWplMz4qPDheRFf9jNDm', NULL),
('trichuot1', '$2y$10$vzjTXDhX7bB6xltFwE2GD.FioMR6ps1Pbo9UXk2hGNNEvbVQMm/Ai', NULL),
('user', '$2y$10$Fw5jIAVpeUxMkuTaNSwDV.K0p11A5Ho2Epnzvw/ir5/wc3KYIm0x6', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_image`
--

CREATE TABLE `category_image` (
  `cateimgid` int(11) NOT NULL,
  `categoryid` varchar(10) NOT NULL,
  `mediaid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category_image`
--

INSERT INTO `category_image` (`cateimgid`, `categoryid`, `mediaid`) VALUES
(1, 'cate01', 'view1'),
(2, 'cate02', 'view2'),
(3, 'cate02', 'view3'),
(4, 'cate02', 'view4'),
(5, 'cate02', 'view5'),
(6, 'cate04', 'view6'),
(7, 'cate05', 'view11'),
(8, 'cate05', 'view12'),
(9, 'cate05', 'view13'),
(10, 'cate05', 'view14'),
(11, 'cate06', 'view17'),
(15, 'cate07', 'view18');

-- --------------------------------------------------------

--
-- Table structure for table `category_information`
--

CREATE TABLE `category_information` (
  `categoryid` varchar(10) NOT NULL,
  `categoryname` varchar(20) NOT NULL,
  `displaytype` varchar(20) NOT NULL,
  `shopid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category_information`
--

INSERT INTO `category_information` (`categoryid`, `categoryname`, `displaytype`, `shopid`) VALUES
('cate01', 'SPRING COLLECTION', 'oneview', 'shop01'),
('cate02', 'ALL PRODUCTS', 'swiper', 'shop01'),
('cate03', 'HOT ITEMS', 'listitem', 'shop01'),
('cate04', 'NEW PRODUCTS', 'oneview', 'shop01'),
('cate05', 'ACCESSORIES', 'swiper', 'shop01'),
('cate06', 'DALAT FRESH', 'oneview', 'shop02'),
('cate07', 'VIETGAP VEGETABLES', 'oneview', 'shop02'),
('cate08', 'ALL PRODUCTS', 'listitem', 'shop02');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `mediaid` varchar(10) NOT NULL,
  `imagelink` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`mediaid`, `imagelink`) VALUES
('caithao', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/cai-thao.jpg'),
('cantay', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/cantay.jpg'),
('mongtoi', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/mongtoi.jpg'),
('product1', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage1.jpg'),
('product10', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage10.jpg'),
('product11', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage11.jpg'),
('product12', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage12.jpg'),
('product13', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage13.jpg'),
('product14', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage14.jpg'),
('product15', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage15.jpg'),
('product16', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage16.jpg'),
('product17', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage17.jpg'),
('product18', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage18.jpg'),
('product19', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage19.jpg'),
('product2', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage2.jpg'),
('product20', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage20.jpg'),
('product21', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage21.jpg'),
('product22', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage22.jpg'),
('product23', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage23.jpg'),
('product24', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage24.jpg'),
('product3', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage3.jpg'),
('product4', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage4.jpg'),
('product5', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage5.jpg'),
('product6', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage6.jpg'),
('product7', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage7.jpg'),
('product8', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage8.jpg'),
('product9', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/productImage9.jpg'),
('raucaingon', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/raucaingong.jpg'),
('rauden', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/rauden.jpg'),
('raumuong', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/raumuong.jpg'),
('view1', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView1.jpg'),
('view11', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView11.jpg'),
('view12', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView12.jpg'),
('view13', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView13.jpg'),
('view14', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView14.jpg'),
('view15', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/raudalat.jpg'),
('view16', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/rausachVietGap.jpg'),
('view17', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/raudalat.jpg'),
('view18', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/rausachVietGap.jpg'),
('view2', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView2.jpg'),
('view3', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView3.jpg'),
('view4', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView4.jpg'),
('view5', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView5.jpg'),
('view6', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView6.jpg'),
('view7', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView7.jpg'),
('view8', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView8.jpg'),
('view9', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/categoryView/categoryView9.jpg'),
('xalachoakl', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/xalachoakleaf.jpg'),
('xalachxoan', 'https://raw.githubusercontent.com/truongmaicongtri/myShop/master/src/drawable/detailProductImage/xalachxoan.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notificationid` varchar(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `detail` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `shopid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`notificationid`, `name`, `detail`, `date`, `shopid`) VALUES
('noti01', 'Discount', 'Discount 50% for all product', '2019-02-14', 'shop01'),
('noti02', 'Discount', 'Discount 10%', '2019-02-11', 'shop01'),
('noti03', 'Discount', 'Discount 5% for all product', '2019-02-18', 'shop02');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `orderdetailid` int(11) NOT NULL,
  `orderid` int(10) NOT NULL,
  `productname` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`orderdetailid`, `orderid`, `productname`, `amount`) VALUES
(23, 26, 'Product 019', 1),
(24, 26, 'Product 020', 2),
(25, 26, 'Product 011', 2),
(26, 27, 'Product 001', 1),
(27, 27, 'Product 002', 1),
(28, 27, 'Product 003', 1),
(29, 27, 'Product 004', 1),
(30, 27, 'Product 005', 1),
(31, 27, 'Product 006', 1),
(32, 28, 'Rau cai ngong', 11),
(33, 29, 'Rau den', 5);

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `orderid` int(10) NOT NULL,
  `state` varchar(20) NOT NULL,
  `ordertime` date NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `paymentType` varchar(20) NOT NULL,
  `address` varchar(300) NOT NULL,
  `shopid` varchar(10) NOT NULL,
  `userid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`orderid`, `state`, `ordertime`, `amount`, `paymentType`, `address`, `shopid`, `userid`) VALUES
(26, 'processing', '2019-02-24', '1330000', 'COD', '255, Dong Khoi st, Thu Dau Mot, Binh Duong Newcity', 'shop01', 'tri'),
(27, 'processing', '2019-02-26', '3500000', 'COD', 'Dong An, Thuan An, Binh Duong', 'shop01', 'tien'),
(28, 'processing', '2019-02-25', '165000', 'COD', 'Dong An, Thuan An, Binh Duong', 'shop02', 'tien'),
(29, 'finished', '2019-02-24', '65000', 'COD', '255, Dong Khoi st, Thu Dau Mot, Binh Duong Newcity', 'shop02', 'tri');

-- --------------------------------------------------------

--
-- Table structure for table `products_information`
--

CREATE TABLE `products_information` (
  `productid` varchar(10) NOT NULL,
  `productname` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `material` varchar(20) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `detail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products_information`
--

INSERT INTO `products_information` (`productid`, `productname`, `material`, `color`, `price`, `amount`, `detail`) VALUES
('item01', 'Product 001', 'cotton', 'red', '500000', 10, 'this is a best products'),
('item02', 'Product 002', 'silk', 'black', '1000000', 5, 'abc'),
('item03', 'Product 003', 'cotton', 'yellow', '500000', 6, 'abc'),
('item04', 'Product 004', 'jean', 'blue', '200000', 8, 'abc'),
('item05', 'Product 005', 'silk', 'pink', '800000', 1, 'abc'),
('item06', 'Product 006', 'coton', 'gray', '500000', 3, 'abc'),
('item07', 'Product 007', 'jean', 'black', '400000', 3, 'abc'),
('item08', 'Product 008', 'coton', 'green', '150000', 9, 'abc'),
('item09', 'Product 009', 'silk', 'violet', '600000', 5, 'abc'),
('item10', 'Product 010', 'jean', 'blue', '630000', 2, 'abc'),
('item11', 'Product 011', 'cotton', 'red', '300000', 4, 'abc'),
('item12', 'Product 012', 'silk', 'white', '200000', 12, 'abc'),
('item13', 'Product 013', 'kaki', 'brown', '500000', 6, 'abc'),
('item14', 'Product 014', 'silk', 'red', '1200000', 3, 'abc'),
('item15', 'Product 015', 'cotton', 'blue', '420000', 5, 'abc'),
('item16', 'Product 016', 'silk', 'black', '600000', 4, 'abc'),
('item17', 'Product 017', 'coton', 'yellow', '650000', 3, 'abc'),
('item18', 'Product 018', 'jean', 'black', '600000', 6, 'abc'),
('item19', 'Product 019', 'coton', 'orange', '130000', 5, 'abc'),
('item20', 'Product 020', 'cotton', 'green', '300000', 2, 'abc'),
('item21', 'Cai thao', NULL, NULL, '15000', 1, '\'Hello! This is cai thao'),
('item22', 'Can tay', NULL, NULL, '15000', NULL, 'Hello! This is can tay'),
('item23', 'Mong toi', NULL, NULL, '10000', NULL, 'Hello! This is mong toi'),
('item24', 'Rau cai ngong', NULL, NULL, '15000', NULL, 'Hello! This is rau cai ngong'),
('item25', 'Rau den', NULL, NULL, '13000', NULL, 'Hello! This is rau den'),
('item26', 'Rau muong', NULL, NULL, '7000', NULL, 'Hello! This is rau muong'),
('item27', 'Xa lach oakleaf', NULL, NULL, '30000', NULL, 'Hello! This is xa lach oakleaf'),
('item28', 'Xa lach xoan', NULL, NULL, '17000', NULL, 'Hello! This is xa lach xoan');

-- --------------------------------------------------------

--
-- Table structure for table `products_in_cate`
--

CREATE TABLE `products_in_cate` (
  `id` int(11) NOT NULL,
  `categoryid` varchar(10) NOT NULL,
  `productid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products_in_cate`
--

INSERT INTO `products_in_cate` (`id`, `categoryid`, `productid`) VALUES
(1, 'cate01', 'item01'),
(2, 'cate01', 'item02'),
(3, 'cate01', 'item03'),
(4, 'cate01', 'item04'),
(5, 'cate01', 'item05'),
(6, 'cate01', 'item06'),
(7, 'cate02', 'item01'),
(8, 'cate02', 'item02'),
(9, 'cate02', 'item03'),
(10, 'cate02', 'item04'),
(11, 'cate02', 'item05'),
(12, 'cate02', 'item06'),
(13, 'cate02', 'item07'),
(14, 'cate02', 'item08'),
(15, 'cate03', 'item06'),
(16, 'cate03', 'item07'),
(17, 'cate03', 'item08'),
(18, 'cate03', 'item09'),
(19, 'cate03', 'item10'),
(20, 'cate04', 'item11'),
(21, 'cate04', 'item12'),
(22, 'cate04', 'item13'),
(23, 'cate04', 'item14'),
(24, 'cate05', 'item15'),
(25, 'cate05', 'item16'),
(26, 'cate05', 'item17'),
(27, 'cate05', 'item18'),
(28, 'cate05', 'item19'),
(29, 'cate05', 'item20'),
(30, 'cate06', 'item21'),
(31, 'cate06', 'item22'),
(32, 'cate06', 'item23'),
(33, 'cate06', 'item24'),
(34, 'cate07', 'item25'),
(35, 'cate07', 'item26'),
(36, 'cate07', 'item27'),
(37, 'cate07', 'item28'),
(38, 'cate08', 'item21'),
(39, 'cate08', 'item22'),
(40, 'cate08', 'item23'),
(41, 'cate08', 'item24'),
(42, 'cate08', 'item25'),
(43, 'cate08', 'item26'),
(44, 'cate08', 'item27'),
(45, 'cate08', 'item28');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `proimgid` int(11) NOT NULL,
  `productid` varchar(10) NOT NULL,
  `mediaid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`proimgid`, `productid`, `mediaid`) VALUES
(1, 'item01', 'product1'),
(2, 'item02', 'product2'),
(3, 'item03', 'product3'),
(4, 'item04', 'product4'),
(5, 'item05', 'product5'),
(6, 'item06', 'product6'),
(7, 'item07', 'product7'),
(8, 'item08', 'product8'),
(9, 'item09', 'product9'),
(10, 'item10', 'product10'),
(11, 'item11', 'product11'),
(12, 'item12', 'product12'),
(13, 'item13', 'product13'),
(14, 'item14', 'product14'),
(15, 'item15', 'product15'),
(16, 'item16', 'product16'),
(17, 'item17', 'product17'),
(18, 'item18', 'product18'),
(19, 'item19', 'product19'),
(20, 'item20', 'product20'),
(21, 'item21', 'caithao'),
(22, 'item22', 'cantay'),
(23, 'item23', 'mongtoi'),
(24, 'item24', 'raucaingon'),
(25, 'item25', 'rauden'),
(26, 'item26', 'raumuong'),
(27, 'item27', 'xalachoakl'),
(28, 'item28', 'xalachxoan');

-- --------------------------------------------------------

--
-- Table structure for table `rating_history`
--

CREATE TABLE `rating_history` (
  `userid` varchar(10) NOT NULL,
  `ratingid` int(11) NOT NULL,
  `shopid` varchar(10) NOT NULL,
  `ratingstar` double NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rating_history`
--

INSERT INTO `rating_history` (`userid`, `ratingid`, `shopid`, `ratingstar`, `date`) VALUES
('tien', 2, 'shop01', 4, '2019-01-08'),
('tri', 3, 'shop01', 4, '2019-02-11'),
('tri', 4, 'shop02', 5, '2019-02-03'),
('tien', 5, 'shop02', 2, '2019-02-03');

-- --------------------------------------------------------

--
-- Table structure for table `shop_information`
--

CREATE TABLE `shop_information` (
  `shopid` varchar(10) NOT NULL,
  `shopname` varchar(20) NOT NULL,
  `ownername` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cellphone` varchar(10) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `latitude` double NOT NULL DEFAULT '11.053683',
  `longitude` double NOT NULL DEFAULT '106.666986'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shop_information`
--

INSERT INTO `shop_information` (`shopid`, `shopname`, `ownername`, `address`, `cellphone`, `phone`, `email`, `latitude`, `longitude`) VALUES
('shop01', 'My Shop', 'Tri and Tien', '255, Nam Ky Khoi Nghia st, Binh Duong Newcity', '0397408460', '067273727', 'tri.truong.set15@eiu.edu.vn', 11.053683, 106.666986),
('shop02', 'Natural Food', 'Truong Mai Cong Tri', 'Tam Hai, Nui Thanh, Quang Nam', '0545434841', '0344845844', 'tri.truong.dsn@gmail.com', 10.9634671, 106.7125004),
('shop03', 'Shop', '', '', '', NULL, '', 11.053683, 106.666986),
('shop04', 'Shop 123', '', '', '', NULL, '', 11.053683, 106.666986),
('shop06', 'Shalalala', '', '', '', NULL, '', 11.053683, 106.666986),
('shop07', 'S', '', '', '', NULL, '', 11.053683, 106.666986);

-- --------------------------------------------------------

--
-- Table structure for table `user_information`
--

CREATE TABLE `user_information` (
  `username` varchar(10) NOT NULL,
  `firstname` varchar(20) NOT NULL DEFAULT '',
  `lastname` varchar(20) NOT NULL DEFAULT '',
  `email` varchar(30) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL,
  `address` varchar(300) NOT NULL DEFAULT '',
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_information`
--

INSERT INTO `user_information` (`username`, `firstname`, `lastname`, `email`, `phone`, `address`, `birthday`) VALUES
('tien', 'Tien', 'Bui Van', 'tien.bui.set15@eiu.edu.vn', '0397408460', 'Dong An, Thuan An, Binh Duong', NULL),
('tri', 'Tri', 'Truong', 'tri.truong.set15@eiu.edu.vn', '0195636262', '255, Dong Khoi st, Thu Dau Mot, Binh Duong Newcity', NULL),
('trichuot', '', '', '', '098656435', 'Hshshxh djsjbsbc xjuehshd ,\nHdhx sbbx', NULL),
('trichuot1', '', '', '', '0986434546', 'Thsgsjhd shjdhhs djidhshd jdjhshs djdj\n', NULL),
('user', '', '', '', '09123923', 'dghuadjawojdiawjdaw', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`),
  ADD KEY `mediaid` (`mediaid`);

--
-- Indexes for table `category_image`
--
ALTER TABLE `category_image`
  ADD PRIMARY KEY (`cateimgid`),
  ADD KEY `categoryid` (`categoryid`),
  ADD KEY `mediaid` (`mediaid`);

--
-- Indexes for table `category_information`
--
ALTER TABLE `category_information`
  ADD PRIMARY KEY (`categoryid`),
  ADD KEY `shopid` (`shopid`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`mediaid`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notificationid`),
  ADD KEY `shopid` (`shopid`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`orderdetailid`),
  ADD KEY `productid` (`productname`),
  ADD KEY `orderid` (`orderid`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `shopid` (`shopid`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `products_information`
--
ALTER TABLE `products_information`
  ADD PRIMARY KEY (`productid`);

--
-- Indexes for table `products_in_cate`
--
ALTER TABLE `products_in_cate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryid` (`categoryid`),
  ADD KEY `productid` (`productid`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`proimgid`),
  ADD KEY `productid` (`productid`),
  ADD KEY `mediaid` (`mediaid`);

--
-- Indexes for table `rating_history`
--
ALTER TABLE `rating_history`
  ADD PRIMARY KEY (`ratingid`),
  ADD KEY `id` (`userid`),
  ADD KEY `shopid` (`shopid`);

--
-- Indexes for table `shop_information`
--
ALTER TABLE `shop_information`
  ADD PRIMARY KEY (`shopid`);

--
-- Indexes for table `user_information`
--
ALTER TABLE `user_information`
  ADD PRIMARY KEY (`username`),
  ADD KEY `id` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_image`
--
ALTER TABLE `category_image`
  MODIFY `cateimgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `orderdetailid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `orderid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `products_in_cate`
--
ALTER TABLE `products_in_cate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `proimgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rating_history`
--
ALTER TABLE `rating_history`
  MODIFY `ratingid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`mediaid`) REFERENCES `media` (`mediaid`) ON UPDATE CASCADE;

--
-- Constraints for table `category_image`
--
ALTER TABLE `category_image`
  ADD CONSTRAINT `category_image_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category_information` (`categoryid`) ON DELETE CASCADE,
  ADD CONSTRAINT `category_image_ibfk_2` FOREIGN KEY (`mediaid`) REFERENCES `media` (`mediaid`) ON DELETE CASCADE;

--
-- Constraints for table `category_information`
--
ALTER TABLE `category_information`
  ADD CONSTRAINT `category_information_ibfk_1` FOREIGN KEY (`shopid`) REFERENCES `shop_information` (`shopid`) ON DELETE CASCADE;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`shopid`) REFERENCES `shop_information` (`shopid`) ON DELETE CASCADE;

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_3` FOREIGN KEY (`orderid`) REFERENCES `order_history` (`orderid`) ON UPDATE CASCADE;

--
-- Constraints for table `order_history`
--
ALTER TABLE `order_history`
  ADD CONSTRAINT `order_history_ibfk_2` FOREIGN KEY (`shopid`) REFERENCES `shop_information` (`shopid`) ON UPDATE CASCADE,
  ADD CONSTRAINT `order_history_ibfk_3` FOREIGN KEY (`userid`) REFERENCES `account` (`username`) ON DELETE CASCADE;

--
-- Constraints for table `products_in_cate`
--
ALTER TABLE `products_in_cate`
  ADD CONSTRAINT `products_in_cate_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category_information` (`categoryid`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_in_cate_ibfk_2` FOREIGN KEY (`productid`) REFERENCES `products_information` (`productid`) ON DELETE CASCADE;

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`productid`) REFERENCES `products_information` (`productid`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_image_ibfk_2` FOREIGN KEY (`mediaid`) REFERENCES `media` (`mediaid`) ON DELETE CASCADE;

--
-- Constraints for table `rating_history`
--
ALTER TABLE `rating_history`
  ADD CONSTRAINT `rating_history_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `account` (`username`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_history_ibfk_2` FOREIGN KEY (`shopid`) REFERENCES `shop_information` (`shopid`) ON UPDATE CASCADE;

--
-- Constraints for table `user_information`
--
ALTER TABLE `user_information`
  ADD CONSTRAINT `user_information_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
