package com.anis.daikishi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/daikishi")
public class ApiController {
	
	@GetMapping("")
	public String home() {
		return "Welcome!";
	}
	@GetMapping("/today")
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	@GetMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	
}
