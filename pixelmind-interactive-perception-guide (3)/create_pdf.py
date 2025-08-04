import os
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter

def create_perception_guide_pdf():
    """
    Generates a professional PDF guide explaining user perception for the PixelMind team.
    """
    doc = SimpleDocTemplate("PixelMind_Perception_Guide.pdf",
                            pagesize=letter,
                            rightMargin=inch,
                            leftMargin=inch,
                            topMargin=inch,
                            bottomMargin=inch)

    # A list to hold all the 'Flowable' objects
    story = []

    # --- STYLES ---
    styles = getSampleStyleSheet()

    # Custom Title Style
    title_style = ParagraphStyle(
        name='CustomTitle',
        parent=styles['h1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor('#1E3A8A'), # Dark Blue
        alignment=TA_CENTER,
        spaceAfter=18
    )

    # Custom Subtitle/Header Style
    header_style = ParagraphStyle(
        name='CustomHeader',
        parent=styles['h2'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=20,
        textColor=colors.HexColor('#1E3A8A'),
        spaceAfter=12,
        spaceBefore=12
    )
    
    # Custom Body Text Style
    body_style = ParagraphStyle(
        name='BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=16,
        spaceAfter=12,
        alignment=TA_LEFT
    )

    # Custom Bullet Point Style
    bullet_style = ParagraphStyle(
        name='Bullet',
        parent=body_style,
        leftIndent=0.25 * inch,
        spaceAfter=6
    )
    
    # Image Caption Style
    caption_style = ParagraphStyle(
        name='Caption',
        parent=styles['Normal'],
        fontName = 'Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#4A5568'), # Gray
        alignment=TA_CENTER,
        spaceAfter=12
    )
    
    # --- PDF CONTENT ---

    # --- Page 1 ---
    story.append(Paragraph("The Grand Illusion:", title_style))
    story.append(Paragraph("Why Our App Looks (and Sounds) Different to Everyone", header_style))
    story.append(Spacer(1, 0.5 * inch))

    story.append(Paragraph("<strong>To:</strong> The PixelMind Design & Development Teams", body_style))
    story.append(Paragraph("<strong>From:</strong> A Friend in Cognitive Science", body_style))
    story.append(Paragraph("<strong>Date:</strong> August 5, 2025", body_style))
    story.append(Paragraph("<strong>Subject: It's Not a Bug, It's a Brain Feature</strong>", body_style))
    story.append(Spacer(1, 0.2 * inch))
    story.append(Paragraph("Hello PixelMind Team,", body_style))
    story.append(Paragraph(
        "Jamie reached out about a fascinating challenge: users are having wildly different "
        "experiences with our new meditation app. This isn't a technical glitch. "
        "It's the human brain at work.", body_style))
    story.append(Paragraph(
        "We all share a fundamental misunderstanding about how we experience the world, a concept known as the "
        "<strong>Fundamental Cognitive Error</strong>: we believe we see reality as it truly is. But we don't. "
        "We are not passively recording the world; our brain actively <em>constructs</em> our reality every moment.", body_style))
    story.append(Paragraph(
        "Think of the brain as a powerful graphics rendering engine. It takes in raw, messy data "
        "from the senses and instantly interprets it based on memories, expectations, and built-in "
        "rules. This guide will walk through key psychological concepts that explain why our 'one app' "
        "is being perceived as 'many apps.'", body_style))
    story.append(PageBreak())

    # --- Page 2 ---
    story.append(Paragraph("The Architects of Reality: Expectation & Context", header_style))
    story.append(Paragraph(
        "Two of the most powerful forces that shape our constructed reality are <em>expectation</em> and "
        "<em>context</em>. What we perceive is heavily influenced by what our brain expects to perceive based "
        "on past experiences and the surrounding environment.", body_style))
    
    story.append(Paragraph("Concept 1: Top-Down Processing (Seeing What We Expect)", header_style))
    story.append(Paragraph(
        "Our brain uses high-level knowledge, such as past experiences and beliefs, to interpret sensory "
        "information. This is called 'top-down processing.' It’s a shortcut that helps us make sense of an "
        "ambiguous world.", body_style))
    story.append(Paragraph(
        "<li><strong>The 'Faces in the Clouds' & 'Hidden Messages' Problem:</strong> This is a form of pareidolia, where the brain finds meaningful patterns in random noise. Our app's ambiguous sounds or animations provide a blank canvas, inviting users' brains to fill in the blanks with their own—sometimes strange—interpretations.</li>", bullet_style))

    story.append(Paragraph("Concept 2: The Power of Context", header_style))
    story.append(Paragraph(
        "The surrounding environment dramatically changes how we interpret information. The infamous internet "
        "phenomenon of '#TheDress' was caused by ambiguous lighting, leading people's brains to make different "
        "assumptions and thus see different colors.", body_style))
    story.append(Paragraph(
        "<li><strong>The 'Purple vs. Blue' & 'Harsh vs. Gloomy' Problem:</strong> A user in a bright office may see our screens as 'harsh,' while one in a dark bedroom finds them 'gloomy.' Their real-world lighting provides the context that changes their perception of the exact same interface.</li>", bullet_style))
    story.append(PageBreak())


    # --- Page 3 ---
    story.append(Paragraph("Try It Yourself: An Illusion of Reality", header_style))
    story.append(Paragraph("To feel how powerfully your brain's built-in rules shape perception, try this classic illusion.", body_style))
    story.append(Paragraph("The Shape-from-Shading Illusion", header_style))
    story.append(Paragraph(
        "Look at the image below from a lunar spacecraft. Do you see a field of bumps or a landscape of craters? "
        "Now, physically turn your screen upside down and look at it again. The features should flip.", body_style))
    story.append(Spacer(1, 0.2 * inch))

    # Add the image - ensure 'lunar_craters.jpg' is in the same directory
    image_path = "lunar_craters.jpg"
    if os.path.exists(image_path):
        img = Image(image_path, width=4*inch, height=3*inch)
        img.hAlign = 'CENTER'
        story.append(img)
        story.append(Paragraph("<em>Credit: ispace Inc.</em>", caption_style))
    else:
        story.append(Paragraph("[Image 'lunar_craters.jpg' not found. Please download and place it in the same folder as the script.]", caption_style))

    story.append(Paragraph("<strong>What's happening?</strong>", body_style))
    story.append(Paragraph(
        "Your visual system has a fundamental, hardwired assumption: <strong>light comes from above</strong>. "
        "When it sees a shape with shading at the bottom, it assumes it's a bump. When shading is at the top, "
        "it assumes it's a crater. You cannot consciously override this; your perception is locked to this rule.", body_style))
    story.append(PageBreak())

    # --- Page 4 ---
    story.append(Paragraph("Designing for Perception: Our Action Plan", header_style))
    story.append(Paragraph(
        "We can't create one experience that everyone perceives identically, but we can design for these differences. "
        "Here are four practical insights for our design process:", body_style))
    story.append(Spacer(1, 0.2 * inch))

    story.append(Paragraph("1. Reduce Perceptual Ambiguity.", header_style))
    story.append(Paragraph(
        "Where we see disagreement is where our design is most ambiguous. For the 'blue vs. purple' icon, we must choose a color that is clearly one or the other and test it against various backgrounds.", body_style))

    story.append(Paragraph("2. Clarify, Don't Just Simplify.", header_style))
    story.append(Paragraph(
        "Our 'simple' meditation bell is so simple it's acting like an auditory inkblot test. A more complex, layered sound is less ambiguous and gives the brain more data to latch onto, reducing the chance of pareidolia.", body_style))
    
    story.append(Paragraph("3. Context is King: Embrace It.", header_style))
    story.append(Paragraph(
        "The 'harsh vs. gloomy' feedback is a direct result of users being in different lighting. Implementing robust 'Light' and 'Dark' modes is a fundamental accessibility tool that lets users match the app's context to their environment.", body_style))

    story.append(Paragraph("4. Guide the Eye (and the Brain).", header_style))
    story.append(Paragraph(
        "By using strong visual hierarchy, shadows, and clear contrast, we can tell the user's brain what is important. This reduces cognitive load and makes the interface feel more intuitive because we are working with the brain's natural tendencies, not against them.", body_style))

    # --- BUILD THE PDF ---
    def add_footer(canvas, doc):
        canvas.saveState()
        canvas.setFont('Helvetica', 9)
        canvas.setFillColor(colors.HexColor('#4A5568'))
        canvas.drawString(inch, 0.75 * inch, f"PixelMind Studios | Page {doc.page}")
        canvas.restoreState()

    try:
        doc.build(story, onFirstPage=add_footer, onLaterPages=add_footer)
        print("Success! 'PixelMind_Perception_Guide.pdf' has been created.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == '__main__':
    create_perception_guide_pdf()

