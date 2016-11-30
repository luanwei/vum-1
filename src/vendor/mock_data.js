import Mock from './mock'


//楼栋接口
/**
 * building_id 楼栋号
 * es_building_id 为传递的参数
 */
Mock.mock('http://demos/Home/keeper/buildings', {
    "errcode": "0",
    "errmsg": "success",
    "data": [
        {
            "building_id": "337",
            "building_name": "2",
            "es_building_id": "74a4247e-4847-4d90-b4a6-6289f130d64e"
        },
        {
            "building_id": "344",
            "building_name": "006",
            "es_building_id": "6a42e061-7401-4fc7-bbb1-d5dec2b1fa75"
        },
    ]

});

/**
 * 用户注册接口
 */

Mock.mock('http://demos/Home/keeper/info', {
        "errcode": "0",
        "errmsg": "success",
        "data": {
            "id": "11",
            "user_id": "15123911315",
            "name": "叶余晓欧",
            "phone": "15123911315",
            "tel": "023-66666666",
            "community_name": "金科王府",
            "community_id": "151",
            "modify_time": "1470733761",
            "create_time": "1466583085"
        }
    }
);


//欠费房屋
/**
 * RESOURCE_NAME  房号
 * FLD_AMOUNT 欠费金额
 * 传递参数到详情页面 参数名称houseId 参数值字段名称 RESOURCE_ID
 */
Mock.mock('http://demos/Home/PropertyPayment/list', {
    "errcode": 0,
    "errmsg": "",
    "data": [ {
        "AREA_NAME": "苏州·枫景颐庭",
        "BUILD_NO": "苏州·枫景颐庭",
        "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
        "CONTACT": "13771844188",
        "FLD_AMOUNT": "4373.46",
        "OWNER_NAME": "未售,马恩妹",
        "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
        "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "苏州·枫景颐庭",
            "BUILD_NO": "苏州·枫景颐庭",
            "BUILD_NO_ID": "a59f4480-dee5-414d-87e1-85b0e1b08d32",
            "CONTACT": "13771844188",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "4720ee19-432b-4804-9241-0722ee6f5b08",
            "RESOURCE_NAME": "066"
        }
    ]

});


//欠费信息

/**
 * RESOURCE_NAME 房号
 * OWNER_NAME 业主姓名
 * CONTACT  手机号
 * month 欠费月份
 * item  欠费类型
 * fee   欠费金额
 * monthMoney 月欠费金额
 * TOTALMONEY 总欠费金额
 */
Mock.mock('http://demos/Home/PropertyPayment/detail', {
    "errcode": "0",
    "errmsg": "success",
    "data": {
        "list": [
            {
                "detail": [
                    {
                        "fee": "10123.0",
                        "item": "公摊服务费"
                    }
                ],
                "month": "2016-06",
                "monthMoney": 10123
            },
            {
                "detail": [
                    {
                        "fee": "450.0",
                        "item": "高层物业服务费"
                    },
                    {
                        "fee": "0454.0",
                        "item": "公摊服务费"
                    }
                ],
                "month": "2016-07",
                "monthMoney": 1245454
            },
            {
                "detail": [
                    {
                        "fee": "04554.0",
                        "item": "高层物业服务费"
                    },
                    {
                        "fee": "4540.0",
                        "item": "公摊服务费"
                    }
                ],
                "month": "2016-08",
                "monthMoney": 4540
            }
        ],
        "total": {
            "BUILD_NO": "西城大院",
            "CONTACT": "18623386125,15804083837,15736075176",
            "OWNER_NAME": "春生",
            "RESOURCE_NAME": "17-603",
            "TOTALMONEY": 282.3
        }
    }
});


//房屋电话
Mock.mock('http://demos/Home/Contacts/list', {
    "errcode": 0,
    "errmsg": "success",
    "data": {
        "count": "1",
        "pageSize": 15,
        "pageTotal": 1,
        "pageCurrent": 1,
        "list": [

            {
                "building_name": "001",
                "house_name": "001",
                "phone": "111111111",
                "owner_name": "华佗"
            },  {
                "building_name": "001",
                "house_name": "001",
                "phone": "111111111",
                "owner_name": "华佗"
            },  {
                "building_name": "001",
                "house_name": "001",
                "phone": "111111111",
                "owner_name": "华佗"
            },  {
                "building_name": "001",
                "house_name": "001",
                "phone": "111111111",
                "owner_name": "华佗"
            }
        ]
    }
});
