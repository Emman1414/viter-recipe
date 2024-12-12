-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 03:56 PM
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
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category_id` int(11) NOT NULL,
  `recipe_level_id` int(11) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_is_active`, `recipe_title`, `recipe_category_id`, `recipe_level_id`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_datetime`, `recipe_created`) VALUES
(46, 1, 'Ginisang Monggo', 8, 1, 2, '1hr 30mins', 'Ginisang Monggo.jpg', '[{\"ingredients\":\"Whole Monggo\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"Water\",\"amount\":\"4\",\"unit\":\"cup\"},{\"ingredients\":\"Vegetable Oil\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\"Garlic smoll sizes\",\"amount\":\"5\",\"unit\":\"pcs\"},{\"ingredients\":\"Onion\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"Pork Strip\",\"amount\":\"1\\/4\",\"unit\":\"kilo\"},{\"ingredients\":\"Knorr Cubes\",\"amount\":\"2\",\"unit\":\"pcs\"},{\"ingredients\":\"Ampalaya\",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\"Malunggay Leaves\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"Pork Chicharon (crushed)\",\"amount\":\"1\\/2\",\"unit\":\"cup\"}]', 'Create our delicious and easy to follow recipe for Ginisang Monggo made extra special with Knorr Pork Cubes. Enjoy it with your family!', '##### Step 1\n\nCooking is all about love and patience. There are certain dishes that need more attention than others, no matter how simple they are. But in the end, you can be sure that the reward is worth it. Monggo is one of those dishes that needs certain preparation before it is fully enjoyed by the family.\n\n##### Step 2\n\nSince monggo is a seed, you need to wash the seeds first in water to get rid of the unwanted dirt they might have collected. And since monggo is a kind of dried bean, you need to soak monggo in water to soften them because seeds absorb water. You can soak monggo for a minimum of 1 hour but the longer you soak them, the less time you need to cook them. Make sure to remove the floating particles on top. You don’t want any dirt on your dish.\n\n##### Step 3\n\nOnce your beans are soft enough you can start sautéing the garlic, onions and tomatoes in a saucepan for about 2 minutes or more. Here’s a technique that most people do not know. Since your “aromatics” which are also known as your sautéing vegetables contain sugar, the longer you cook them, the more you develop flavour from caramelization.\n\n##### Step 4\n\nThe next step is the easiest because you just need to throw in the pork strips and saute until nicely browned. Drain the beans from the soaking water the add into your pot. Pour in 4 cups water, and the Knorr Pork Cube. Let this simmer until the beans can easily be mashed. Just a tip, if you want a thinner soup consistency, you may add more water. On the other hand, if you want a thicker soup consistency, simply lessen the amount of water or you may continue cooking until the sauce thickens.\n\n##### Step 5\n\nWe’re almost there! You just need to add in the ampalaya and cook this for 2 minutes more before adding in the malunggay.\n\n##### Step 6\n\nWhat a reward this dish brings to the table for Ginisang Monggo is a healthy and delicious meal waiting to be enjoyed by the whole family. TIP: Monggo is best topped with chicharon and paired with any fried dish like fish or liempo. Tip: If you\\\'re not a fan of ampalaya, use ampalaya leaves instead or just add more malunggay leaves.', '2024-12-12 22:21:07', '2024-12-12 22:19:27'),
(47, 1, 'Spicy Monggo with Tinapa Recipe', 8, 1, 3, '1hr 14mins', 'Beef Sinigang.jpg', '[{\"ingredients\":\"Monggo Beans\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"Water\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"Garlic, chopped\",\"amount\":\"7\",\"unit\":\"pcs\"},{\"ingredients\":\"Tomatoes, chopped\",\"amount\":\"3\",\"unit\":\"pcs\"},{\"ingredients\":\"medium -sized tinapang galunggong, fried, filleted and shredded\",\"amount\":\"2\",\"unit\":\"pcs\"},{\"ingredients\":\"Knorr Pork Cubes\",\"amount\":\"2\",\"unit\":\"pcs\"},{\"ingredients\":\"Siliing Labuyo\",\"amount\":\"2\",\"unit\":\"pcs\"},{\"ingredients\":\"Malunggay Leaves\",\"amount\":\"1\",\"unit\":\"cup\"}]', 'This Filipino classic vegetable dish combines the fresh flavor of Mung beans slowly simmered in Knorr Pork broth, mixed with tinapa flakes and malunggay leaves', '##### Step 1\n\nSince monggo beans are seeds, they may have acquired and collected dirt. So, you need to clean and pick them over then wash in several changes of water before draining thoroughly. Monggo beans also need to be soaked in water to soften them. For this recipe, use 4 cups of water then give it a gentle stir. Make sure to remove the floating particles on top. You don’t want any dirt on your dish.\n\n##### Step 2\n\nOnce your beans are soft enough, get a large pot, and make it nice and warm over medium-hight heat. Then you can start sautéing the garlic, onions and tomatoes in a pot for about 2 minutes or more.\n\n##### Step 3\n\nYou may now pour in the softened monggo beans with their own liquid before adding the Knorr Pork Cubes. You need to simmer this by turning the fire to low, cover the pot then leave it to cook for 1 hour or until the monggo beans are tender. Stir once in a while to avoid the monggo from clumping together.\n\n##### Step 4\n\nOnce monggo beans are tender, throw in the tinapa flakes and siling labuyo. Stir gently and simmer this for about 1- 2 minutes.\n\n##### Step 5\n\nOne more step then we are done! You just need to top the malunggay leaves on the monggo and turn off the heat.\n\n\n##### Step 6\n\nWhat a reward this dish brings to the table! You can now enjoy this healthy and delicious meal with the family.', '2024-12-12 22:38:32', '2024-12-12 22:28:37'),
(48, 1, 'Sinigang-Seasoned Fried Chicken Recipe', 9, 2, 5, '2hr 15mins', 'Ginataang Hipon.jpg', '[{\"ingredients\":\"Chicken leg \\/drumstick, washed and pat-dried\",\"amount\":\"1\",\"unit\":\"kg\"},{\"ingredients\":\"Knorr Sinigang sa Sampalok Original\",\"amount\":\"1\",\"unit\":\"pack\"},{\"ingredients\":\"Fish sauce\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\"cooking oil for deep frying\",\"amount\":\"\",\"unit\":\"\"}]', 'Create our delicious and easy to follow recipe for Sinigang-Seasoned Fried Chicken. You\\\\\\\'ll be surprised how good this is! Taste and see what we mean.', '##### Step 1\n\nBegin by marinating chicken in KNORR Sinigang Sa Sampalok Mix Original and fish sauce for at least 30 minutes.\n\n##### Step 2\n\nNow get your pan nice and hot over medium heat. Pour enough oil then deep fry marinated chicken a few pieces at a time, about 10-12 minutes or until golden brown and fully cooked.\n\n##### Step 3\n\nDo not overcrowd pan when deep frying to make sure all pieces will be crispy and will brown nicely. This will also make frying faster because the heat in the oil is maintained.\n\n##### Step 4\n\nPlace on paper towel to remove excess oil. And that\\\\\\\'s our dish. Once you try this recipe, it will surely become one of your favorite dishes. It’s amazingly delicious!', '2024-12-12 22:39:01', '2024-12-12 22:36:23');

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
-- Dumping data for table `recipe_category`
--

INSERT INTO `recipe_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(1, 1, 'Baka Recipe', '2024-12-12 22:11:13', 0),
(6, 1, 'Baboy Recipe', '2024-12-12 22:11:18', 2024),
(7, 1, 'Malansang Isda Recipe', '2024-12-12 22:11:23', 2024),
(8, 1, 'Gulay Recipe', '', 2024),
(9, 1, 'Manok Recipe', '2024-12-12 22:33:32', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_level`
--

CREATE TABLE `recipe_level` (
  `level_aid` int(11) NOT NULL,
  `level_is_active` tinyint(1) NOT NULL,
  `level_level` varchar(20) NOT NULL,
  `level_datetime` varchar(20) NOT NULL,
  `level_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_level`
--

INSERT INTO `recipe_level` (`level_aid`, `level_is_active`, `level_level`, `level_datetime`, `level_created`) VALUES
(1, 1, 'Easy', '', 0),
(2, 1, 'Moderate', '2024-12-12 15:30:42', 2024),
(3, 1, 'Difficult', '2024-12-12 15:30:53', 2024);

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
-- Indexes for table `recipe_level`
--
ALTER TABLE `recipe_level`
  ADD PRIMARY KEY (`level_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `recipe_category`
--
ALTER TABLE `recipe_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recipe_level`
--
ALTER TABLE `recipe_level`
  MODIFY `level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
