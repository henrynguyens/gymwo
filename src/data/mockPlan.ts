export const MOCK_PLAN_DATA = {
    "user_analysis": {
        "bmi": 22.5,
        "tdee": 1850,
        "daily_calorie_target": 1400,
        "macros": {
            "p": 87,
            "c": 140,
            "f": 54
        }
    },
    "nutrition_plan": {
        "meal_schedule": {
            "breakfast": {
                "time": "07:00 - 08:00",
                "options": [
                    {
                        "dish_name": "Phở gà (ít bánh, nhiều ức gà, không mỡ)",
                        "portion": "1 bát trung bình",
                        "protein_content": "25g",
                        "kcal": 350
                    },
                    {
                        "dish_name": "Cháo yến mạch nấu tôm và rau củ",
                        "portion": "1 bát tô",
                        "protein_content": "20g",
                        "kcal": 320
                    },
                    {
                        "dish_name": "Trứng hấp kiểu Nhật (Chawanmushi) với nấm",
                        "portion": "2 hũ nhỏ",
                        "protein_content": "18g",
                        "kcal": 250
                    }
                ]
            },
            "snack_1": {
                "time": "10:00 - 10:30",
                "options": [
                    {
                        "dish_name": "Sữa chua không đường với hạt chia",
                        "portion": "1 hũ",
                        "protein_content": "8g",
                        "kcal": 120
                    },
                    {
                        "dish_name": "Đu đủ chín hoặc ổi",
                        "portion": "150g",
                        "protein_content": "1g",
                        "kcal": 60
                    },
                    {
                        "dish_name": "Hạt hạnh nhân hoặc hạt điều",
                        "portion": "15 hạt",
                        "protein_content": "4g",
                        "kcal": 100
                    }
                ]
            },
            "lunch": {
                "time": "12:00 - 13:00",
                "options": [
                    {
                        "dish_name": "Cơm gạo lứt, cá thu kho thơm (ít đường), bông cải xanh luộc",
                        "portion": "1/2 bát cơm, 1 lát cá, 1 đĩa rau",
                        "protein_content": "28g",
                        "kcal": 400
                    },
                    {
                        "dish_name": "Gỏi cuốn tôm thịt (không thịt mỡ), nước tương đậu phộng nhẹ",
                        "portion": "4-5 cuốn",
                        "protein_content": "22g",
                        "kcal": 350
                    },
                    {
                        "dish_name": "Thịt bò xào đậu que, canh cải nấu tôm",
                        "portion": "100g bò, 1 bát canh",
                        "protein_content": "26g",
                        "kcal": 380
                    }
                ]
            },
            "snack_2": {
                "time": "15:30 - 16:00",
                "options": [
                    {
                        "dish_name": "Trứng gà luộc",
                        "portion": "1 quả",
                        "protein_content": "7g",
                        "kcal": 70
                    },
                    {
                        "dish_name": "Sữa hạt không đường (đậu nành/hạnh nhân)",
                        "portion": "200ml",
                        "protein_content": "6g",
                        "kcal": 90
                    },
                    {
                        "dish_name": "Táo xanh",
                        "portion": "1 quả",
                        "protein_content": "0.5g",
                        "kcal": 50
                    }
                ]
            },
            "dinner": {
                "time": "18:30 - 19:30",
                "options": [
                    {
                        "dish_name": "Canh chua cá lóc (ít đường), nhiều rau dọc mùng/giá",
                        "portion": "1 bát tô lớn (ít bún/cơm)",
                        "protein_content": "22g",
                        "kcal": 300
                    },
                    {
                        "dish_name": "Ức gà áp chảo sốt chanh dây, salad rau mầm",
                        "portion": "120g gà",
                        "protein_content": "30g",
                        "kcal": 320
                    },
                    {
                        "dish_name": "Đậu hũ dồn thịt nạc hấp, rau muống luộc",
                        "portion": "2 miếng lớn",
                        "protein_content": "24g",
                        "kcal": 280
                    }
                ]
            }
        }
    },
    "workout_plan": [
        {
            "day_name": "Thứ 2",
            "focus": "Đốt mỡ toàn thân & Cardio vui vẻ",
            "activity_type": "Zumba",
            "duration": "45 phút",
            "exercises": [
                {
                    "name": "Zumba Dance Session",
                    "reps_sets": "1 buổi",
                    "technical_guide": "Tập trung vào các cử động hông và tay. Giữ nhịp thở đều, không nín thở."
                }
            ]
        },
        {
            "day_name": "Thứ 3",
            "focus": "Phục hồi cơ lõi & Săn chắc bụng",
            "activity_type": "Core Recovery",
            "duration": "30 phút",
            "exercises": [
                {
                    "name": "Pelvic Tilts (Nghiêng xương chậu)",
                    "reps_sets": "3 sets x 15 reps",
                    "technical_guide": "Nằm ngửa, gập gối. Ép thắt lưng xuống sàn bằng cách hóp bụng dưới. Không nâng mông cao."
                },
                {
                    "name": "Heel Slides (Trượt gót chân)",
                    "reps_sets": "3 sets x 10 reps mỗi chân",
                    "technical_guide": "Giữ lưng phẳng, từ từ trượt gót chân ra xa rồi thu về. Kiểm soát cơ bụng để lưng không bị võng."
                },
                {
                    "name": "Bird-Dog (Tư thế con chim - chó)",
                    "reps_sets": "3 sets x 10 reps",
                    "technical_guide": "Chống tay và đầu gối. Duỗi tay phải và chân trái đồng thời. Giữ lưng thẳng, không vặn hông."
                }
            ]
        },
        {
            "day_name": "Thứ 4",
            "focus": "Linh hoạt & Giảm căng thẳng",
            "activity_type": "Postpartum Yoga",
            "duration": "40 phút",
            "exercises": [
                {
                    "name": "Cat-Cow (Con mèo - Con bò)",
                    "reps_sets": "10 chu kỳ",
                    "technical_guide": "Chuyển động nhẹ nhàng giữa võng lưng và gù lưng theo hơi thở để giải tỏa áp lực cột sống."
                },
                {
                    "name": "Child's Pose (Tư thế em bé)",
                    "reps_sets": "Giữ 2 phút",
                    "technical_guide": "Mở rộng gối để tạo không gian cho bụng. Thư giãn hoàn toàn vai và cổ."
                }
            ]
        },
        {
            "day_name": "Thứ 5",
            "focus": "Sức bền & Cơ mông đùi",
            "activity_type": "Strength Light",
            "duration": "35 phút",
            "exercises": [
                {
                    "name": "Glute Bridge (Cầu mông)",
                    "reps_sets": "3 sets x 15 reps",
                    "technical_guide": "Nâng mông lên cao, siết chặt cơ mông ở đỉnh. Đảm bảo lực dồn vào gót chân."
                },
                {
                    "name": "Modified Side Plank (Plank nghiêng chống gối)",
                    "reps_sets": "3 sets x 30 giây mỗi bên",
                    "technical_guide": "Chống bằng đầu gối để giảm áp lực lên cơ bụng dọc, tập trung vào cơ bụng chéo."
                }
            ]
        },
        {
            "day_name": "Thứ 6",
            "focus": "Đốt cháy Calorie",
            "activity_type": "Zumba",
            "duration": "45 phút",
            "exercises": [
                {
                    "name": "Zumba High Energy",
                    "reps_sets": "1 buổi",
                    "technical_guide": "Tăng cường cường độ các bước nhảy. Chú ý giữ thẳng lưng khi di chuyển."
                }
            ]
        },
        {
            "day_name": "Thứ 7",
            "focus": "Phục hồi sâu & Core",
            "activity_type": "Yoga & Core",
            "duration": "40 phút",
            "exercises": [
                {
                    "name": "Dead Bug (Bọ chết - Biến thể an toàn)",
                    "reps_sets": "3 sets x 12 reps",
                    "technical_guide": "Hạ từng chân xuống chạm sàn trong khi giữ lưng dưới áp chặt xuống thảm. Tuyệt đối không để hở lưng."
                },
                {
                    "name": "Warrior II (Chiến binh 2)",
                    "reps_sets": "Giữ 5 hơi thở mỗi bên",
                    "technical_guide": "Tăng cường sức mạnh đôi chân và sự thăng bằng."
                }
            ]
        },
        {
            "day_name": "Chủ Nhật",
            "focus": "Nghỉ ngơi chủ động",
            "activity_type": "Rest/Walk",
            "duration": "20-30 phút",
            "exercises": [
                {
                    "name": "Đi bộ nhẹ nhàng",
                    "reps_sets": "1 vòng công viên",
                    "technical_guide": "Đi bộ thư giãn cùng em bé, hít thở không khí trong lành."
                }
            ]
        }
    ],
    "lifestyle_recommendations": [
        "Uống đủ 2-2.5 lít nước mỗi ngày, đặc biệt là trước bữa ăn 30 phút.",
        "Tránh các bài tập Crunch hoặc Sit-up truyền thống để bảo vệ cơ bụng khỏi tình trạng tách cơ (Diastasis Recti).",
        "Ưu tiên ngủ đủ giấc (7-8 tiếng) để hỗ trợ quá trình trao đổi chất và phục hồi hormone.",
        "Sử dụng kỹ thuật thở bụng (Diaphragmatic breathing) để kích hoạt cơ lõi sâu một cách tự nhiên.",
        "Hạn chế gia vị mặn và đường tinh luyện trong các món ăn Việt Nam để tránh tích nước."
    ]
};
