-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: parking
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `message_id` int NOT NULL,
  `message_description` varchar(5000) DEFAULT NULL,
  `message_email` varchar(100) DEFAULT NULL,
  `message_name` varchar(100) DEFAULT NULL,
  `message_subject` varchar(500) DEFAULT NULL,
  `message_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_sequence`
--

DROP TABLE IF EXISTS `message_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_sequence`
--

LOCK TABLES `message_sequence` WRITE;
/*!40000 ALTER TABLE `message_sequence` DISABLE KEYS */;
INSERT INTO `message_sequence` VALUES (1);
/*!40000 ALTER TABLE `message_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking`
--

DROP TABLE IF EXISTS `parking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking` (
  `parking_id` int NOT NULL,
  `parking_closing_time` varchar(10) DEFAULT NULL,
  `parking_contact` varchar(100) DEFAULT NULL,
  `parking_fourwheel` varchar(100) DEFAULT NULL,
  `parking_latitude` varchar(100) DEFAULT NULL,
  `parking_longitude` varchar(100) DEFAULT NULL,
  `parking_name` varchar(100) DEFAULT NULL,
  `parking_opening_time` varchar(10) DEFAULT NULL,
  `parking_price` int DEFAULT NULL,
  `parking_status` varchar(100) DEFAULT NULL,
  `parking_twowheel` varchar(100) DEFAULT NULL,
  `parking_fourwheel_capacity` varchar(100) DEFAULT NULL,
  `parking_twowheel_capacity` varchar(100) DEFAULT NULL,
  `parking_email` varchar(100) DEFAULT NULL,
  `parking_password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`parking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking`
--

LOCK TABLES `parking` WRITE;
/*!40000 ALTER TABLE `parking` DISABLE KEYS */;
INSERT INTO `parking` VALUES (1,'8','1234567896','7\n','27.69473850621781',' 85.28473951444977','Kalanki Parking Area','6',25,'Available','7\n','30','30','kalanki@gmail.com','12345'),(2,'8','4851549613','18\n','27.696904523075045',' 85.29335016504098','Solteemode Parking','6',25,'Available','328\n','20','20','solteemode@gmail.com','12345'),(3,'8','9841526320','24','27.71624885389856',' 85.28420088307774','Swoyambhu Parking','6',25,'Available','38','30','50','swoyambhu@gmail.com','12345'),(4,'8','1234567895','50','27.692693962358263',' 85.29891811588169','Kuleshwor Parking','6',30,'Available','120','50','120','kuleshwor@gmail.com','12345'),(5,'8','9841526398','50','27.68473668397641',' 85.29377745355842','Balkhu Parking','6',20,'Available','350','100','400','balkhu@gmail.com','12345'),(6,'7','98412345678','180','27.69432715917324',' 85.31372630006422','Tripureshwor Parking','6',40,'Available','314','200','400','tripureshwor@gmail.com','12345'),(7,'8','9841221666','40','27.71138265874878',' 85.29075231149864','Chhauni Parking','6',25,'Available','86','65','120','chhauni@gmail.com','12345'),(8,'8','1526310900','100','27.72039798855802',' 85.30628808469693','Paknajol Parking','6',25,'Available','82','100','100','paknajol@gmail.com','12345'),(9,'8','5548962333','25','27.7066695818628',' 85.31327943558162','Ratna Park Parking','6',25,'Available','25','100','100','ratnapark@gmail.com','12345'),(10,'11','9841123456','25','27.69937884227102',' 85.31256557559904','Civil Mall Parking','5',25,'Available','30','200','500','civilmall@gmail.com','12345'),(11,'89','9841123456','50','27.69961359516018',' 85.2996359292935','Kalimati Trade Center','6',30,'Available','28','20','50','kalimatitrade@gmail.com','12345'),(12,'10','9841123456','50','27.688252804783527',' 85.3341208395463','Naya Baneshwor Parking','6',30,'Available','112','50','150','nayabaneshwor@gmail.com','12345'),(13,'8','9841123456','50','27.695685194196596',' 85.30431506157177','Teku Parking','6',30,'Available','244','90','350','teku@gmail.com','12345'),(14,'9','9841123456','50','27.69824427485535',' 85.30043730856009','Raddison Parking','6',30,'Available','482','150','600','raddison@gmail.com','12345'),(15,'8','9841123456','50','27.70309063458894',' 85.32291064799017','Nepmany Education Parking','6',30,'Available','781','220','800','nepmany@gmail.com','12345'),(16,'10','9841123456','50','27.70151684108071',' 85.31886805780047','Bhrikuti Mandap Parking','6',30,'Available','160','80','180','bhrikuti@gmail.com','12345'),(17,'8','9841123456','50','27.698401162724117',' 85.29823088532784','Kumari Bank Kalimati','6',30,'Available','80','50','90','kumarikalimati@gmail.com','12345'),(18,'8','9841123456','50','27.705928735140752',' 85.32070075363872','Bag bazar Kalimati','6',30,'Available','54','14','60','bagbazar@gmail.com','12345'),(19,'9','9841123456','50','27.7094504888797',' 85.32649652660584','City Center','6',30,'Available','120','250','800','city@gmail.com','12345'),(20,'8','9841123456','50','27.70942276261041',' 85.30034944096295','Dallu Parking','6',30,'Available','768','240','800','dallu@gmail.com','12345'),(21,'8','9841526398','85','27.70525979552371',' 85.3301054100395','Dilli Bazar Parking','6',25,'Available','157','100','250','dillibazar@gmail.com','12345'),(22,'9','9841526398','45','27.702675895312762',' 85.33074968448653','Ghattekulo Parking','7',25,'Available','24','100','200','ghattekulo@gmail.com','12345'),(23,'9','9841526398','86','27.711654339717192',' 85.32279461006475','Hattisar Parking','8',25,'Available','68','100','300','hattisar@gmail.com','12345');
/*!40000 ALTER TABLE `parking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_sequence`
--

DROP TABLE IF EXISTS `parking_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_sequence`
--

LOCK TABLES `parking_sequence` WRITE;
/*!40000 ALTER TABLE `parking_sequence` DISABLE KEYS */;
INSERT INTO `parking_sequence` VALUES (3);
/*!40000 ALTER TABLE `parking_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-13 16:23:01
