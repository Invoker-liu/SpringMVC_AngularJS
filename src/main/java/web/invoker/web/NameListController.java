package web.invoker.web;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/4/2.
 */
@RestController
public class NameListController {
    @RequestMapping(value = "/list/name",method = RequestMethod.GET)
    public JSONObject getNameList(){
        List<String> stringList= new ArrayList<>();
        stringList.add("毕权忠");
        stringList.add("张文");
        stringList.add("刘建军");
        stringList.add("刘广伟");
        JSONObject result=new JSONObject();
        result.put("data",stringList);
        return result;
    }
}
