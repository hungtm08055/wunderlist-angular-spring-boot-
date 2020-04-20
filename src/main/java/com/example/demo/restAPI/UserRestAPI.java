package com.example.demo.restAPI;

import com.example.demo.domain.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRestAPI  {

    private final UserService userService;

    public UserRestAPI(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/getAll")
    public List<User> getAll()
    {
        return (List<User>) userService.findAll();
    }

    @GetMapping("/user/getID/{id}")
    public ResponseEntity<User> getByID(@PathVariable("id") String id)
    {
        Optional<User> user = userService.findOne((Long.valueOf(id)));

        if (!user.isPresent()) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
        else {
            user = userService.findOne(Long.valueOf(id));
            return new ResponseEntity<User>(HttpStatus.OK);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@Valid @RequestBody User u)
    {
        User user1 = userService.findAccount(u.getUsername(),u.getPassword());
        if (user1 == null) // if account doesnt exist
        {
            return new ResponseEntity<User>(user1 ,HttpStatus.NOT_FOUND);
        }
        else // if match with DB -> go to home page
        {
            return new ResponseEntity<User>(user1 ,HttpStatus.OK);
        }
    }

    @PostMapping("/register") // tested
    public ResponseEntity<User> add(@RequestBody User user) {
        User user1 = userService.findAccount(user.getUsername(),user.getPassword());

        if (user1 == null) { // if account is available -> add new
            user.getUsername();
            user.getPassword();
            user = userService.save(user);
            return new ResponseEntity<User>(user,HttpStatus.CREATED);
        }
        else // exist
        {
            return new ResponseEntity<User>(user,HttpStatus.CONFLICT);
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
