# Najoom Summer Experience — Project Workflow & Timeline

**Today:** May 30, 2026  
**Opening Day:** June 14, 2026 ✅ CONFIRMED (15 days)  
**Target Capacity:** 300 children | 21 coaches | 42 volunteers

---

## Control Center — All Links

| Sheet | Link |
|-------|------|
| Task Timeline | [Control Center](https://docs.google.com/spreadsheets/d/1aUU3_InbTU2r2LfLOCGx6_wjwcQIkAHwvB4whK0B0fI) |
| Registrations | [Registration Tracker](https://docs.google.com/spreadsheets/d/1Fzp_wWOwZv0W_Y1A6J9Zy-lmzyI_eIH5YV_SK1ZhXVc) |
| Team Recruitment | [Team Tracker](https://docs.google.com/spreadsheets/d/1nm7QR0ozwn0_CmX_8nlmpHd8uOp16Fj63N08WuKwel4) |
| Budget | [Budget Sheet](https://docs.google.com/spreadsheets/d/1LxnjKUl3qWzdWdPymSKHeb2zxBWh32fEQb9X3qhl8Dw) |
| Landing Page | projects/najoom-summer/index.html |

---

## Docs Status

| Doc | Status | Location |
|-----|--------|----------|
| Partnership Structure (35/35/30) | ✅ Done | Google Docs |
| Roles & Responsibilities Matrix | ✅ Done | Google Docs |
| Staffing & Operations Structure | ✅ Done | Google Docs |
| Fast-Track Launch Plan | ✅ Done | Google Docs |
| Landing Page (registration site) | ✅ Done | projects/najoom-summer/index.html |
| Pricing & Packages | ❌ Missing | — |
| Budget Template | ❌ Missing | — |
| Coach/Instructor Recruitment Tracker | ❌ Missing | — |
| Registration Tracking Sheet | ✅ Created | [Open Sheet](https://docs.google.com/spreadsheets/d/1Fzp_wWOwZv0W_Y1A6J9Zy-lmzyI_eIH5YV_SK1ZhXVc) |
| Parent Communication Kit | ❌ Missing | — |
| Daily/Weekly Schedule Template | ❌ Missing | — |
| Equipment & Materials Order List | ❌ Missing | — |

---

## Timeline

### WEEK 1 — May 30 → June 6 | Launch & Mobilization

**Commercial (joint approval needed)**
- [ ] Approve pricing and packages
- [ ] Confirm partnership agreement (sign or verbal lock)
- [ ] Decide registration process — WhatsApp follow-up or direct payment?

**Operations (Othman)**
- [ ] Finalize exact camp dates (opening day + duration)
- [ ] Lock weekly schedule template
- [ ] Start coach recruitment — post open roles
- [ ] Start volunteer recruitment
- [ ] Identify and contact specialized instructors (swimming, taekwondo, kickboxing, MMA, ballet, arts)

**Marketing (Najoom)**
- [ ] Launch announcement campaign
- [ ] Go live on Instagram/social
- [ ] On-site content shoot at Dunes Club
- [ ] Open registration form (landing page is live — tie to WhatsApp or Google Sheet)

**Deliverables by June 6**
- Pricing locked
- Registrations open and flowing
- Recruitment started

---

### WEEK 2 — June 7 → June 13 | Recruitment & Sales Push

**Operations (Othman)**
- [ ] Interview and confirm coaches (21 needed)
- [ ] Confirm all specialized instructors
- [ ] Lock volunteers (42 needed)
- [ ] Order uniforms (need lead time)
- [ ] Order activity materials and equipment
- [ ] Build registration tracking sheet — name, age group, payment status

**Marketing (Najoom)**
- [ ] Daily content — activity teasers, team reveals, behind-the-scenes
- [ ] Paid advertising
- [ ] Influencer outreach
- [ ] School outreach

**Sales**
- [ ] Daily registration count review
- [ ] Follow up with all registered leads via WhatsApp

**Deliverables by June 13**
- Full team confirmed
- All orders placed
- 50+ registrations minimum

---

### WEEK 3 — June 14 → June 20 | Site Setup & Team Readiness

**Site (Dunes Club + Othman)**
- [ ] Set up activity zones
- [ ] Registration desk ready
- [ ] Pool area prepped
- [ ] Signage installed
- [ ] Najoom branding live on-site

**Team Prep (Othman)**
- [ ] Staff orientation day
- [ ] Safety and emergency procedures training
- [ ] Daily operations run-through / simulation

**Marketing (Najoom)**
- [ ] Countdown campaign (7 days to opening)
- [ ] Final registration push
- [ ] First parent testimonials from early signups

**Deliverables by June 20**
- Site 100% ready
- Full team trained
- 100+ registrations

---

### OPENING WEEK — June 21+

**Day 1 Operations**
- Registration desk active from 7:30am
- Coaches on stations
- Activity zones open
- Parent WhatsApp group active

**Ongoing**
- Daily content coverage
- Daily attendance + feedback log
- Weekly ops meeting every Thursday (per plan)
- Registration push for Week 2+

---

## Critical Path (Blockers)

These must happen first or everything else stalls:

1. **Pricing approved** — can't open real registrations without it
2. **Camp open date confirmed** — everything on this timeline depends on it
3. **Registration system decided** — landing page form needs to connect somewhere (WhatsApp? Google Sheet? Both?)
4. **Coach recruitment started** — 21 coaches takes time; every day delayed = harder to fill

---

## Othman's Role (Experience & Operations Team — 30%)

Your lane owns:
- Camp concept, program design, weekly schedules
- All staffing — hiring, training, managing coaches + volunteers
- Daily operations and quality control
- Family Friday planning
- Experience innovation
- Reporting to partners

You do NOT own:
- Pricing decisions (joint)
- Brand/marketing (Najoom)
- Venue/pool ops (Dunes Club)

---

## Next Actions — Do These First

1. ✅ Opening date confirmed: **June 14**
2. ✅ Registration tracking sheet created
3. **NOW — 15 min setup:** Connect the form to the sheet (see below)
4. **This week:** Lock pricing so registrations can convert
5. **This week:** Start posting coach/instructor recruitment

---

## Registration Sheet Setup (One-Time, 15 Minutes)

Sheet: https://docs.google.com/spreadsheets/d/1Fzp_wWOwZv0W_Y1A6J9Zy-lmzyI_eIH5YV_SK1ZhXVc

**Steps to connect the landing page form:**

1. Open the sheet above
2. Click **Extensions > Apps Script**
3. Delete any existing code in the editor
4. Open `projects/najoom-summer/registration-script.gs` and paste the entire file
5. Click **Deploy > New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy** — copy the Web App URL it gives you
7. Open `projects/najoom-summer/index.html`
8. Find the line: `const SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';`
9. Replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with the URL you copied
10. Save and re-deploy the site

**Done.** Every form submission will now land as a new row in the sheet with timestamp, all fields, and status set to "New".
