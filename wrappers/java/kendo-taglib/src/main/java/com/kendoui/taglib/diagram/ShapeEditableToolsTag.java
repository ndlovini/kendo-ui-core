
package com.kendoui.taglib.diagram;


import com.kendoui.taglib.BaseTag;




import java.util.ArrayList;
import java.util.Map;
import java.util.List;

import javax.servlet.jsp.JspException;

@SuppressWarnings("serial")
public class ShapeEditableToolsTag extends BaseTag /* interfaces */ /* interfaces */ {
    
    @Override
    public int doEndTag() throws JspException {
//>> doEndTag
//<< doEndTag

        return super.doEndTag();
    }

    @Override
    public void initialize() {
//>> initialize

        tools = new ArrayList<Map<String, Object>>();

//<< initialize

        super.initialize();
    }

    @Override
    public void destroy() {
//>> destroy
//<< destroy

        super.destroy();
    }

//>> Attributes

    private List<Map<String, Object>> tools;

    public List<Map<String, Object>> tools() {
        return tools;
    }

    public static String tagName() {
        return "diagram-shape-editable-tools";
    }

    public void addTool(ShapeEditableToolTag value) {
        tools.add(value.properties());
    }

//<< Attributes

}
