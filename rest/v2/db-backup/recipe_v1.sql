-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 03:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(17, 'Roasted Chicken', 'chicken', 'easy', 4, '1hr 15mins', 'chicken.jpg', '[{\"ingredients\":\"Whole Chicken\",\"amount\":\"1\",\"unit\":\"Whole\"},{\"ingredients\":\"Salt and Pepper\",\"amount\":\"2\",\"unit\":\"tsp\"}]', 'Lorem Lorem Lorem LoremLoremLorem Lorem Lorem Lorem LoremLoremLorem Lorem', '##### Step 1 **WOW**\n\n##### testing\n\nLorem LoremLorem LoremLoremLorem LoremLorem Lorem\n\n##### Step 2\n\n Lorem LoremLorem Lorem Lorem Lorem Lorem v\n\n#####  Step 3\n\n Lorem LoremLoremLorem LoremLoremLorem v\n\n\n![Tux, the Linux mascot](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CseCtcinrSzJjbh36MUj7lOVXBt0LElvjw&s)', 1, '2024-12-04 15:16:17', '2024-12-04 13:01:12'),
(23, 'Ginisang Monggo', 'beef', 'easy', 2, '1 hour', 'mongo.jpg', '[{\"ingredients\":\"Whole Monggo Beans\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"Water\",\"amount\":\"4\",\"unit\":\"cups\"},{\"ingredients\":\"Vegetable Cooking Oil\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\" Garlic, mashed\",\"amount\":\"5\",\"unit\":\"pcs\"},{\"ingredients\":\"Tomatoes, chopped\",\"amount\":\"3\",\"unit\":\"pcs\"}]', 'Create our delicious and easy to follow recipe for Ginisang Monggo made extra special with Knorr Pork Cubes. Enjoy it with your family!', '###### Step 1 \nCooking is all about love and patience. There are certain dishes that need more attention than others, no matter how simple they are. But in the end, you can be sure that the reward is worth it. Monggo is one of those dishes that needs certain preparation before it is fully enjoyed by the family.\n\n###### Step 2 \nCooking is all about love and patience. There are certain dishes that need more attention than others, no matter how simple they are. But in the end, you can be sure that the reward is worth it. Monggo is one of those dishes that needs certain preparation before it is fully enjoyed by the family.\n\n\n###### Step 3 \nCooking is all about love and patience. There are certain dishes that need more attention than others, no matter how simple they are. But in the end, you can be sure that the reward is worth it. Monggo is one of those dishes that needs certain preparation before it is fully enjoyed by the family.', 1, '2024-12-12 08:54:02', '2024-12-09 07:38:43'),
(24, 'Sinigang', 'beef', 'easy', 2, '1 hr 30 mins', 'slider3.jpg', '[{\"ingredients\":\"Onion\",\"amount\":\"3\",\"unit\":\"pcs\"},{\"ingredients\":\"Tomatoes\",\"amount\":\"4\",\"unit\":\"pcs\"},{\"ingredients\":\"Sampalok Mix \",\"amount\":\"1\",\"unit\":\"pack\"},{\"ingredients\":\"Okra\",\"amount\":\"4\",\"unit\":\"pcs\"},{\"ingredients\":\"Radish\",\"amount\":\"1\\/2\",\"unit\":\"pcs\"}]', 'This dish combines the sour and tangy flavors of tamarind soup mixed with fresh vegetables and the crispy texture of the Pork Belly.', '###### Step 1\n\nThis dish combines the sour and tangy flavors of tamarind soup mixed with fresh vegetables and the crispy texture of the Pork Belly.\n\n###### Step 2\n\nThis dish combines the sour and tangy flavors of tamarind soup mixed with fresh vegetables and the crispy texture of the Pork Belly.\n\n###### Step 3\n\nThis dish combines the sour and tangy flavors of tamarind soup mixed with fresh vegetables and the crispy texture of the Pork Belly.', 1, '2024-12-09 07:44:36', '2024-12-09 07:44:36'),
(25, 'Hanni', 'beef', 'difficult', 1, 'infinite', '#hanni #newjeans.jpg', '[{\"ingredients\":\"Love\",\"amount\":\"1000\",\"unit\":\"10000\"}]', 'asdasd', 'asdasdasd', 1, '2024-12-10 08:15:08', '2024-12-10 08:15:08');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_category`
--

CREATE TABLE `recipe_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- Indexes for table `recipe_category`
--
ALTER TABLE `recipe_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `recipe_category`
--
ALTER TABLE `recipe_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
