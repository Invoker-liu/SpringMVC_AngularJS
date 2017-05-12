package web.invoker.web;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/4/2.
 */
@RestController
public class NameListController {
    @RequestMapping(value = "/list/name",method = RequestMethod.GET)
    public JSONObject getNameList() throws IOException {
        List<String> stringList= new ArrayList<>();
        stringList.add("海绵宝宝");
        stringList.add("图图");
        stringList.add("哪吒");
        stringList.add("Invoker");
        JSONObject result=new JSONObject();
        result.put("data",stringList);
        return result;
    }

    @RequestMapping(value = "/list/name/test", method = RequestMethod.GET)
    public JSONObject getNameList2() throws IOException {
        List<String> stringList = new ArrayList<>();
        JSONObject result = new JSONObject();
        result.put("data", stringList);
        return result;
    }
}
