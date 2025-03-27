# Game Concept: **Hacker’s Gambit**

## **Overview**
A **cyberpunk-inspired tactical strategy game** using a **7x5 grid** and dice mechanics to summon and control Agents. Inspired by Yu-gi-oh dungeon dice monster. The player must manage **Breach, Pulse, Spike, and Glitch** crests, strategically summon Agents, and defeat the opponent's Core, which has 2 HP.

### **Core Mechanics**
- **Grid:** 7x5, with **Cores** at (1,3) and (7,3) (2 HP each).
- **Dice Rolls:** 3 D4s per turn.  
  - **Breach:** Summons Agents (Ghost/Specter).
  - **Pulse:** Move an Agent 1 extra space.
  - **Spike:** Spend to attack (adjacent enemies, based on attack value).
  - **Glitch:** Acts as a wild card, can be used as any symbol.

### **Turn Structure:**
1. **Start of Turn:** All already active Agents **move 1 free space** (optional).  
2. **Roll Phase:** Roll 3 D4s.  
3. **Summon Phase:** Spend Breach rolls to summon Agents.  
   - **2 Breach:** Level 1 Agent (Ghost) (1 ATK, 1 HP, 1 tile).  
   - **3 Breach:** Level 2 Agent (Specter) (2 ATK, 2 HP, 2 tiles).  
4. **Optional Movement Phase:** Already active Agents may move **1 space** (not mandatory).  
5. **Pulse Bonus (If Rolled):** Move an Agent **1 extra space immediately** after summoning.  
6. **Save Bits:** Store Pulse & Spike Bits for later.  
7. **Action Phase:** Spend Bits:  
   - **1 Pulse Bit:** Place a **tile** OR move **1 extra space.**  
   - **1 Spike Bit:** Attack (adjacent enemy, based on ATK stat).  
8. **End Turn.**  

### **Win Condition:**
- **First to destroy the opponent's Core** (2 HP) wins.

---

## **Detailed Mechanics:**

### **1. Dice System (3 D4s per turn)**

| Crest   | Function                                                                 |
|---------|--------------------------------------------------------------------------|
| **Breach** | Used to summon Agents (Ghost/Specter).                                   |
| **Pulse** | Used to move an Agent 1 extra space.                                     |
| **Spike** | Used to attack (spend 1 Spike Bit to attack adjacent enemy, based on Attack). |
| **Glitch** | Acts as a wild card, can be used as any other crest (Breach, Pulse, or Spike). |

### **2. Agents**

| Level | Agent   | HP | Attack | Tile Size |
|-------|---------|----|--------|-----------|
| 1     | Ghost   | 1  | 1      | 1         |
| 2     | Specter | 2  | 2      | 2         |

- **Ghost:** Summoned with **2 Breach** symbols.  
- **Specter:** Summoned with **3 Breach** symbols.  

### **3. Pulse & Spike Bits**

- **Pulse Bits**:  
  - **Spend 1 Pulse Bit** to place a **tile** or move an Agent **1 extra space**.
  
- **Spike Bits**:  
  - **Spend 1 Spike Bit** to attack an **adjacent enemy**. The attack damage equals the **Attack stat** of the attacking Agent.

### **4. Movement**

- Each Agent can move 1 space per turn for free, but this is **optional**.
- **Pulse** crest allows **additional movement** by spending **Pulse Bits**.

---

## **Project Management Tools:**

For better project management and tracking, the following tools are recommended:

1. **Notion**: Best for organizing game mechanics, rules, and design ideas.
2. **Trello**: Simple Kanban boards for tracking tasks like features, bugs, and progress.
3. **Milanote**: Visual brainstorming and game flow diagrams.
4. **GitHub Projects**: For code versioning and collaboration (if coding the game).

---

## **Next Steps**:
1. **Prototype Phase**:  
   - Implement **grid-based movement & Core structure** first.  
   - Create **dice rolling mechanics** and the **Bit system**.  
   
2. **First Playable Level**:  
   - Create an **enemy pattern** (simple scripted behavior for the opponent).  
   - Balance early levels to be challenging but not overwhelming.

---

## **Contact / Credits**
Feel free to reach out if you have any feedback or want to contribute to the project!

