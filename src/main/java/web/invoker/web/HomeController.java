package web.invoker.web;

import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * Created by Administrator on 2017/4/1.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String welcome(){
        try {
            return "index";
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("用户名或密码错误");
        }
    }
}
