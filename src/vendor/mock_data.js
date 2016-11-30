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
            "es_building_id": "asdkfaslkdjfsdkf"
        },
        {
            "building_id": "344",
            "building_name": "006",
            "es_building_id": "asdkfasdlkfjsad"
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
            "user_id": "112331315",
            "name": "叶余晓欧",
            "phone": "41312313231",
            "tel": "023-66666666",
            "community_name": "天王盖地府",
            "community_id": "151",
            "modify_time": "12321313",
            "create_time": "144546"
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
        "AREA_NAME": "武隆修女山",
        "BUILD_NO": "武隆修女山",
        "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
        "CONTACT": "12345679823",
        "FLD_AMOUNT": "4373.46",
        "OWNER_NAME": "未售,马恩妹",
        "RESOURCE_ID": "1321",
        "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "1321346263216",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
            "RESOURCE_NAME": "066"
        },
        {
            "AREA_NAME": "武隆修女山",
            "BUILD_NO": "武隆修女山",
            "BUILD_NO_ID": "14332132d12dfa31333213d1fasdf1313asd1f3",
            "CONTACT": "12345679823",
            "FLD_AMOUNT": "4373.46",
            "OWNER_NAME": "未售,马恩妹",
            "RESOURCE_ID": "132134626321654.06532456523654343212",
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
            "BUILD_NO": "天上人间",
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
