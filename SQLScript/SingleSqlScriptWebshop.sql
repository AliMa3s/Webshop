CREATE DATABASE  IF NOT EXISTS `webshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webshop`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: webshop
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movieorder`
--

DROP TABLE IF EXISTS `movieorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movieorder` (
  `orderId` int NOT NULL,
  `movieId` int NOT NULL,
  `qty` int NOT NULL,
  `price` double NOT NULL,
  KEY `movieId` (`movieId`),
  KEY `movieorder_ibfk_1_idx` (`orderId`),
  CONSTRAINT `movieorder_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `movieorder_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieorder`
--

LOCK TABLES `movieorder` WRITE;
/*!40000 ALTER TABLE `movieorder` DISABLE KEYS */;
INSERT INTO `movieorder` VALUES (1,1,1,3.99),(45,1,1,3.99),(45,2,1,8.99),(45,7,1,2.99),(45,3,1,5.99);
/*!40000 ALTER TABLE `movieorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(245) DEFAULT 'no description',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Avengers EndGame',3.99,'Avengers Endgame met tonystark en anderen superheros enz...'),(2,'Shang-Chi',8.99,'Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film.'),(3,'VIVO',5.99,'Vivo is a 2021 American computer-animated musical comedy film Animation'),(4,'Finch',3.99,'On a post-apocalyptic earth, a robot, built to protect the life of.'),(5,'Red Notice',3.99,'Red Notice is a 2021 American action comedy film. With DawynJhonsen '),(6,'Luca',3.99,'Luca is a 2021 American computer-animated coming-of-age fantasy film.'),(7,'Godzilla vs Kong',2.99,'Godzilla vs. Kong ... From Warner Bros. An full on action movie.'),(8,'Shark Eyes',5.99,'A G.I. Joe spin-off centered around the character of Snake Eyes. ... '),(9,'Hitman\'s Wife\'s Bodyguard',2.99,'Hitman\'s Wife\'s Bodyguard ... The world\'s most lethal odd couple – bodyguard Michael Bryce'),(10,'JohnWick',8.99,'John Wick (retroactively known as John Wick: Chapter 1) is a 2014 American action thriller film'),(11,'JohnWick 2',10.99,'John Wick: Chapter 2 (also known as simply John Wick 2) is a 2017 American neo-noir action thriller film'),(12,'F9',2.99,'F9 (also known as F9: The Fast Saga and internationally as Fast & Furious 9)'),(13,'The Sucide squad',9.99,'The Suicide Squad is a 2021 American superhero film based on the DC Comics team Suicide Squad. ');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int NOT NULL,
  `postalCode` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `totalPrice` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2020-12-29 10:40:51','Ali','maes','gentstraat',61,'9000','Gent','047111222','azdefatrhtws@gmail.com',224.99),(45,'2022-01-08 14:02:57','ali','m','alistraat',5,'9000','gent','065464854','a@a.com',21.96);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08 14:18:42
