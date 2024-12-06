package com.register.RegisterLogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.register.RegisterLogin.entity.User;
import com.register.RegisterLogin.service.AuthService;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Add React Frontend URL
public class UserController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        authService.registerUser(user.getUsername(), user.getPassword());
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        Optional<User> existingUser = authService.loginUser(user.getUsername(), user.getPassword());
        if (existingUser.isPresent()) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
}
