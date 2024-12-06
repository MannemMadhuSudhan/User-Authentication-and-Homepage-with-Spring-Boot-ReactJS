//package com.register.RegisterLogin.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:5173")  // Frontend URL
//                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allowed methods
//                .allowedHeaders("*")  // Allow all headers
//                .allowCredentials(true);  // Allow credentials (cookies, HTTP authentication)
//    }
//}
