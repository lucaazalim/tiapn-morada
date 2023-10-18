-- MariaDB dump 10.19-11.1.2-MariaDB, for osx10.18 (arm64)
--
-- Host: localhost    Database: morada
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB-1:11.1.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `rent_value` decimal(15,2) NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `offer_property_id` (`property_id`),
  KEY `offer_user_id` (`user_id`),
  CONSTRAINT `offer_property_id` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`),
  CONSTRAINT `offer_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `rent_id` bigint(20) NOT NULL,
  `rent_value` decimal(15,2) NOT NULL,
  `competence_month` tinyint(2) unsigned NOT NULL,
  `competence_year` smallint(4) unsigned NOT NULL,
  `status` enum('pending','allegedly_paid','confirmed') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `payment_rent_id` (`rent_id`),
  CONSTRAINT `payment_rent_id` FOREIGN KEY (`rent_id`) REFERENCES `rental` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `type` enum('APARTMENT','HOUSE','STUDIO') NOT NULL,
  `zip_code` varchar(8) NOT NULL,
  `street` varchar(100) NOT NULL,
  `number` int(10) unsigned NOT NULL,
  `complement` varchar(100) DEFAULT NULL,
  `neighborhood` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(2) NOT NULL,
  `country` varchar(2) NOT NULL DEFAULT 'BR',
  `description` text NOT NULL,
  `area` int(11) NOT NULL,
  `bedrooms` int(11) NOT NULL,
  `bathrooms` int(11) NOT NULL,
  `garage_spaces` int(11) NOT NULL,
  `accepts_pet` tinyint(1) NOT NULL,
  `furnished` tinyint(1) NOT NULL,
  `rent_value` decimal(15,2) NOT NULL,
  `condominium_fee` decimal(15,2) DEFAULT NULL,
  `iptu_value` decimal(15,2) NOT NULL,
  `photo_base64` longtext NOT NULL,
  `status` enum('PENDING_APPROVAL','APPROVED','REJECTED') NOT NULL DEFAULT 'PENDING_APPROVAL',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `property_FK` (`user_id`),
  CONSTRAINT `property_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `renegotiation`
--

DROP TABLE IF EXISTS `renegotiation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renegotiation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `rental_id` bigint(20) NOT NULL,
  `agreed` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `renegotiation_rental_id` (`rental_id`),
  CONSTRAINT `renegotiation_rental_id` FOREIGN KEY (`rental_id`) REFERENCES `rental` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `renegotiation_offer`
--

DROP TABLE IF EXISTS `renegotiation_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renegotiation_offer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `renegotiation_id` bigint(20) NOT NULL,
  `created_by_owner` tinyint(1) NOT NULL,
  `rent_value` decimal(15,2) NOT NULL,
  `type` enum('final','flexible') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `renegotiation_offer_renegotiation_id` (`renegotiation_id`),
  CONSTRAINT `renegotiation_offer_renegotiation_id` FOREIGN KEY (`renegotiation_id`) REFERENCES `renegotiation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rental`
--

DROP TABLE IF EXISTS `rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rental` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `property_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `offer_id` bigint(20) NOT NULL,
  `rent_value` decimal(15,2) NOT NULL,
  `contract_html` longtext NOT NULL,
  `contract_signed_by_owner` tinyint(1) NOT NULL DEFAULT 0,
  `contract_signed_by_renter` tinyint(1) NOT NULL DEFAULT 0,
  `terminated` tinyint(1) NOT NULL DEFAULT 0,
  `terminated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `rent_property_id` (`property_id`),
  KEY `rent_user_id` (`user_id`),
  KEY `rent_offer_id` (`offer_id`),
  CONSTRAINT `rent_offer_id` FOREIGN KEY (`offer_id`) REFERENCES `offer` (`id`),
  CONSTRAINT `rent_property_id` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`),
  CONSTRAINT `rent_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `termination`
--

DROP TABLE IF EXISTS `termination`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `termination` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `rental_id` bigint(20) NOT NULL,
  `initiated_by_owner` tinyint(1) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `termination_rental_id` (`rental_id`),
  CONSTRAINT `termination_rental_id` FOREIGN KEY (`rental_id`) REFERENCES `rental` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `pix_key` varchar(32) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email` (`email`),
  UNIQUE KEY `user_cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_verification`
--

DROP TABLE IF EXISTS `user_verification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_verification` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `identity_document_front` longtext NOT NULL,
  `identity_document_back` longtext NOT NULL,
  `admin_message` text DEFAULT NULL,
  `status` enum('PENDING_APPROVAL','APPROVED','REJECTED') DEFAULT 'PENDING_APPROVAL',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_verification_user_id` (`user_id`),
  CONSTRAINT `user_verification_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `visit`
--

DROP TABLE IF EXISTS `visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `property_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `datetime` datetime NOT NULL,
  `carried_out` tinyint(1) NOT NULL DEFAULT 0,
  `visit_rating` tinyint(1) unsigned DEFAULT NULL,
  `property_rating` tinyint(1) unsigned DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `visit_user_id` (`user_id`),
  KEY `visit_property_id` (`property_id`),
  CONSTRAINT `visit_property_id` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`),
  CONSTRAINT `visit_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'morada'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18 17:43:04
