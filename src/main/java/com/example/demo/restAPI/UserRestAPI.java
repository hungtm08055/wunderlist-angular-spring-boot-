package com.example.demo.restAPI;

import com.example.demo.domain.MyUploadForm;
import com.example.demo.domain.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRestAPI  {
    @Autowired
    private UserService userService;

    // <a href> handle
    @GetMapping("/sign-up")
    public ModelAndView signUp(User user)
    {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sign-up.html");
        return modelAndView;
    }

    @GetMapping("/forget-pass")
    public ModelAndView forgetPassword(User user)
    {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/forget-pass.html");
        return modelAndView;
    }

    @GetMapping("/home")
    public ModelAndView homePage(User user,HttpSession httpSession)
    {
        if(httpSession.getAttribute("username") != null)
        {
            User user1 = (User) userService.findAccount(user.getUsername(),user.getPassword());
            ModelAndView modelAndView = new ModelAndView("/hienthi.html");
            modelAndView.addObject("username", user.getUsername().toString());
            modelAndView.addObject("user_id", user.getId());
            return modelAndView;
        }
        else
        {
            ModelAndView modelAndView = new ModelAndView("/index.html");
            modelAndView.addObject("notExist","Not login yet");
            return modelAndView;
        }

    }

    // logic handle
    @GetMapping("/user/getAll")
    public List<User> getAll()
    {
        return (List<User>) userService.findAll();
    }

    @GetMapping("/user/getID/{id}")
    public Optional<User> getByID(@PathVariable("id") String id)
    {
        Optional<User> user = userService.findOne((Long.valueOf(id)));

        if (!user.isPresent())
        {
            System.out.println("ID "+id+" Not found");
        }
        else
        {
            user = userService.findOne(Long.valueOf(id));
        }
        return user;
    }

    @PostMapping("/login")
    public User login(@RequestBody User u,HttpSession httpSession)
    {
        User user1 = (User) userService.findAccount(u.getUsername(),u.getPassword());
        if (user1 == null) // if account doesnt exist
        {
            return null;
        }
        else // if match with DB -> go to home page
        {
            return user1;
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Void> add(@RequestBody User user) {
        User user1 = (User) userService.findAccount(user.getUsername(),user.getPassword());

        if (user1 == null) // if account is available -> add new account
        {
            user.getUsername();
            user.getPassword();
            User save = userService.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else // exist
        {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/user/update")
    public User update(@RequestBody User u)
    {
        Optional<User> user = userService.findOne(u.getId());
        if (!user.isPresent())
        {
            System.out.println("not found");
        }
        else
        {
            userService.save(u);
            return u;
        }
        return u;
    }

    @DeleteMapping("/user/delete/{id}")
    public void deleteByID(@PathVariable("id") long id)
    {
        userService.delete(id);
    }
}
